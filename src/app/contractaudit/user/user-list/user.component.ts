import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent, SelectItem, MultiSelect } from 'primeng/primeng';
import { DatePipe } from '@angular/common';
import { TestApi } from '../../shared/api/TestApi';
import * as _model from '../../shared/model/models';

import { AlertService } from '../../../sdk/core/shared/services/alert.service';
import { MessageType } from '../../../sdk/core/shared/models/messageType.model';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent {
    public studyGuides: _model.TestViewModel[];
  
    public totalRecords: number;
  

    constructor(private testApi: TestApi, private router: Router, private alertService: AlertService) {     
      

    }// ctor    

    goToUserEditDetail(id) {
       this.router.navigate(['/user/edit', id]);
    }// goToUserDetail()   

    lazyLoadUsers(event: LazyLoadEvent) {

        // event.first = First row offset
        // event.rows = Number of rows per page
        // event.sortField = Field name to sort with
        // event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        // filters: FilterMetadata object having field as key and filter value, filter matchMode as value       

        this.getPagedUsers(event);

    }// lazyLoadUsers()

    getPagedUsers(event: LazyLoadEvent) {

        const request: _model.PagedDataRequest = {};
        request.filters = [];
        request.multiSelectFilters = [];

        this.populateRequest(event, request);

        this.testApi.GetPaged(request).subscribe(result => {
            const apiResponse = result as _model.ResponseListTestViewModel;
            const testResponse = apiResponse.data as _model.TestViewModel[];
            const resultMeta = apiResponse.resultMeta as _model.ResultMeta;

            if (apiResponse.status.messages[0].code === '500') {
                this.alertService.showError('Error', 'Users were not loaded: ' + apiResponse.status.messages[0].description);
            } else {
                this.studyGuides = testResponse;
                this.totalRecords = resultMeta.pagination.totalresults;
            }

        });
    }

    populateRequest(event: LazyLoadEvent, request: _model.PagedDataRequest) {

        if (event != null) {
            const filters = event.filters;
            // Populate Filters
            for (const filter in filters) {
                if (!filters.hasOwnProperty(filter)) {
                    // The current property is not a direct property of p
                    continue;
                }

                const filterRequest: _model.FilterExpression = {};
                filterRequest.columnName = filter;
                filterRequest.filter = filters[filter].value;
                request.filters.push(filterRequest);
            }           

            if (event.sortField != null) {
                // Populate Sort
                const sort: _model.SortExpression = {};
                sort.sortColumn = event.sortField;
                sort.sortDirection = event.sortOrder.toString();
                request.sort = sort;
            }

            if (event.first != null && event.rows != null) {
                // Populate paging
                const pagination: _model.Pagination = {};
                pagination.start = event.first;
                pagination.count = event.rows;
                request.pagination = pagination;
            }
        }

    }// populateRequest()



}// UserComponent
