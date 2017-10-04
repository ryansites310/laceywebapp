import { Http, BaseRequestOptions, Response, ResponseOptions, Headers } from '@angular/http';
import { TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User, UserRequest, Filter, Pagination, Sort, UserResponse } from '../model/user';
import { ResponseIEnumerableUserViewModel } from '../../shared/models/models';
import { RoleService } from './role.service';
import { environment } from '../../../../environments/environment';

describe('Role Service', () => {
    let mockbackend: MockBackend, service: RoleService;
    const lastConnection: any = null;
    this.baseUrl = environment.apiBaseUrl;

    const MockRoles = {
        'meta': {
            'transaction_id': '1d1a5492-6d5a-45fb-8c37-9c2652864326'
        },
        'resultMeta': {
            'pagination': {
                'start': 1,
                'totalresults': 1,
                'count': 1,
                'links': []
            }
        },
        'data': [
            {
            'rowId': 1,
            'name': 'Administrator'
            },
            {
            'rowId': 2,
            'name': 'Team Lead'
            },
            {
            'rowId': 3,
            'name': 'Contract Maintenance User'
            },
            {
            'rowId': 4,
            'name': 'View Only User'
            },
            {
            'rowId': 5,
            'name': 'Claim Auditor'
            },
            {
            'rowId': 6,
            'name': 'Restricted Claim Auditor'
            }
        ],
        'status': {
            'messages': [
                {
                    'code': '200',
                    'name': 'ok',
                    'severity': 'normal',
                    'description': 'ok'
                }
            ]
        }
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RoleService, MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backendInstance, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }]
        });

        mockbackend = TestBed.get(MockBackend);
        mockbackend.connections.subscribe((connection: any) => this.lastConnection = connection);
        service = TestBed.get(RoleService);
    });

    it('should be truthy', () => {
        expect(service).toBeTruthy();
    });

    describe('Get Roles', () => {
        const mockResponse = JSON.stringify(MockRoles);
        it('Should call User Service url: ' + this.baseUrl +
            'api/paymentintegrity/datamining/contractaudit/v1.0/administration/role', fakeAsync(() => {
                mockbackend.connections.subscribe(conn => {
                    conn.mockRespond(new Response(new ResponseOptions({ body: mockResponse })));
                });
                service.GetRoles().subscribe(data => { });
                // ts lint hates super long lines of code, thats why this url is formated like this.
                const expected = this.baseUrl + 'api/paymentintegrity/datamining/contractaudit/v1.0/administration/role';
                const actual = this.lastConnection.request.url;
                expect(actual).toEqual(expected);
            }));
    });

});
