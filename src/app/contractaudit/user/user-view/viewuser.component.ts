import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../sdk/core/shared/services/alert.service';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

import * as _model from '../../shared/models/models';

@Component({
    selector: 'app-view-user',
    templateUrl: './viewuser.component.html'
})
export class ViewUserComponent implements OnInit {
    public baseUrl;
    public user: _model.UserViewModel = <_model.UserViewModel>{};
    isActive = (this.user.logicalDelete) ? false : true;

    ngOnInit(): void {
        this.getUserById();
    }

    constructor(private http: Http, private route: ActivatedRoute, private userService: UserService) {
        this.baseUrl = localStorage.getItem('api');
    }// ctor

    getUserById() {
        this.userService.getUserById(this.route.snapshot.params['id']).subscribe(result => {
            this.user = result as _model.UserViewModel;
        });
    }// getUserById()

}// ViewUserComponent
