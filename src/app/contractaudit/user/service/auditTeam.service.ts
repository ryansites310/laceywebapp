/**
 * Contract Audit API
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Http, Headers, RequestOptionsArgs, Response, URLSearchParams } from '@angular/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as models from '../../shared/models/models';
import 'rxjs/Rx';
import { environment } from '../../../../environments/environment';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class AuditTeamService {
    protected basePath = 'https://localhost/';
    public defaultHeaders: Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        } else {
            this.basePath = environment.apiBaseUrl;
        }
    }


    public GetAuditTeams(extraHttpRequestParams?: any): Observable<models.ResponseIEnumerableDropDownViewModel> {
        const path = this.basePath +  `api/paymentintegrity/datamining/contractaudit/${environment.apiVersion}/administration/audit_team`;

        const queryParameters = new URLSearchParams();
        const headerParams = this.defaultHeaders;
        const requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}