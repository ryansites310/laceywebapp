import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptionsArgs, Response, URLSearchParams } from '@angular/http';

import * as _model from '../../shared/models/models';
import 'rxjs/add/operator/map';

import { environment } from '../../../../environments/environment';

@Injectable()
export class UserService {
    public user: _model.UserViewModel;
    public baseUrl;
    public defaultHeaders: Headers = new Headers();

    constructor(private http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.baseUrl = basePath;
        } else {
            this.baseUrl = environment.apiBaseUrl;
        }
    }// ctor

    getUserById(_id): Observable<_model.UserViewModel> {
        const path = this.baseUrl + `api/paymentintegrity/datamining/contractaudit/${environment.apiVersion}/administration/user/` + _id;
        const headers = new Headers();
        this.addNoCacheHeaders(headers);
        return this.http.get(path, { headers: headers })
            .map(result => result.json().data as _model.UserViewModel);
    }// getUserById()

    getUserByMsId(_msid): Observable<_model.UserViewModel> {
        const path = this.baseUrl + `/api/paymentintegrity/datamining/contractaudit/${environment.apiVersion}/administration/user/{msid}`
            .replace('{' + 'msid' + '}', String(_msid));

        const queryParameters = new URLSearchParams();
        const headerParams = this.defaultHeaders;
        this.addNoCacheHeaders(headerParams);
        // verify required parameter 'msid' is not null or undefined
        if (_msid === null || _msid === undefined) {
            throw new Error('Required parameter msid was null or undefined');
        }
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

    }// getUserByMsId()

    getPagedUsers(request): Observable<_model.ResponseIEnumerableUserViewModel> {
        const path = this.baseUrl + `api/paymentintegrity/datamining/contractaudit/${environment.apiVersion}/administration/user/search`;
        const jsonRequest = JSON.stringify(request);
        const headers = new Headers();
        this.addNoCacheHeaders(headers);

        return this.http.post(path,
            jsonRequest, { headers: headers })
            .map(result => result.json() as _model.ResponseIEnumerableUserViewModel);
    }// getPagedUsers

    updateUser(user): Observable<_model.ResponseUserViewModel> {
        const path = this.baseUrl + `api/paymentintegrity/datamining/contractaudit/${environment.apiVersion}/administration/user`;
        const jsonRequest = JSON.stringify(user);

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.addNoCacheHeaders(headers);
        return this.http
            .put(path, jsonRequest, { headers: headers })
            .map(result => result.json() as _model.ResponseUserViewModel);
    }// saveUser()

    addUser(user): Observable<_model.ResponseUserViewModel> {
        const path = this.baseUrl + `api/paymentintegrity/datamining/contractaudit/${environment.apiVersion}/administration/user`;
        const jsonRequest = JSON.stringify(user);

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.addNoCacheHeaders(headers);
        return this.http
            .post(path, jsonRequest, { headers: headers })
            .map(result => result.json() as _model.ResponseUserViewModel);
    }// addUser()

    deleteUserById(rowId) {
        const path = this.baseUrl + `api/paymentintegrity/datamining/contractaudit/${environment.apiVersion}/administration/user/` + rowId;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.addNoCacheHeaders(headers);
        // return http status, should be 200 if http OK...
        return this.http
            .delete(path, { headers: headers })
            .map(r => r.json());
    }// deleteUser()

    addNoCacheHeaders(headers: Headers) {
        //headers.append('If-Modified-Since', 'Mon, 26 Jul 1997 05:00:00 GMT');
        headers.append('Content-Type', 'application/json');
        headers.append('Cache-control', 'no-cache');
        headers.append('Cache-control', 'no-store');
        headers.append('Expires', '0');
        headers.append('Pragma', 'no-cache');
    }

}// EditUserService()


