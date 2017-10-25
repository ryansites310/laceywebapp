
import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';
import { environment } from '../../../../environments/environment';

'use strict';

@Injectable()
export class TestApi {
    protected basePath = 'http://laceystudyguideapi.azurewebsites.net';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http) {
        
    }

    public DeleteStudyGuide (id: number, extraHttpRequestParams?: any ) : Observable<boolean> {
        const path = this.basePath + '/api/test/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiTestByIdDelete.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
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

    public GetById (id: number, extraHttpRequestParams?: any ) : Observable<models.ResponseTestViewModel> {
        const path = this.basePath + '/api/test/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        headerParams.append('Content-Type', 'application/json');
        headerParams.append('Cache-control', 'no-cache');
        headerParams.append('Cache-control', 'no-store');
        headerParams.append('Expires', '0');
        headerParams.append('Pragma', 'no-cache');
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiTestByIdGet.');
        }
        let requestOptions: RequestOptionsArgs = {
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

    public AddStudyGuide (value?: models.TestViewModel, extraHttpRequestParams?: any ) : Observable<models.ResponseTestViewModel> {
        const path = this.basePath + '/api/test';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
         headerParams.append('Content-Type', 'application/json');
        headerParams.append('Cache-control', 'no-cache');
        headerParams.append('Cache-control', 'no-store');
        headerParams.append('Expires', '0');
        headerParams.append('Pragma', 'no-cache');

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(value);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    public UpdateStudyGuide (value?: models.TestViewModel, extraHttpRequestParams?: any ) : Observable<models.ResponseTestViewModel> {
        const path = this.basePath + '/api/test';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
         headerParams.append('Content-Type', 'application/json');
        headerParams.append('Cache-control', 'no-cache');
        headerParams.append('Cache-control', 'no-store');
        headerParams.append('Expires', '0');
        headerParams.append('Pragma', 'no-cache');
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(value);

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    public GetPaged (request?: models.PagedDataRequest, extraHttpRequestParams?: any ) : Observable<models.ResponseListTestViewModel> {
        const path = this.basePath + '/api/test/search';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
         headerParams.append('Content-Type', 'application/json');
        headerParams.append('Cache-control', 'no-cache');
        headerParams.append('Cache-control', 'no-store');
        headerParams.append('Expires', '0');
        headerParams.append('Pragma', 'no-cache');
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(request);

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
