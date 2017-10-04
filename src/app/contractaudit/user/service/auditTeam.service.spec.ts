import { Http, BaseRequestOptions, Response, ResponseOptions, Headers } from '@angular/http';
import { TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User, UserRequest, Filter, Pagination, Sort, UserResponse } from '../model/user';
import { ResponseIEnumerableUserViewModel } from '../../shared/models/models';
import { AuditTeamService } from './auditTeam.service';
import { environment } from '../../../../environments/environment';

describe('Audit Team Service', () => {
    let mockbackend: MockBackend, service: AuditTeamService;
    const lastConnection: any = null;
    this.baseUrl = environment.apiBaseUrl;

    const MockAuditTeams = {
        'meta': {
            'transaction_id': 'facec49d-042e-4aef-a67a-975bfeced36d'
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
                'name': 'Team 1'
            },
            {
                'rowId': 2,
                'name': 'Team 2'
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
            providers: [AuditTeamService, MockBackend,
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
        service = TestBed.get(AuditTeamService);
    });

    it('should be truthy', () => {
        expect(service).toBeTruthy();
    });

    describe('Get Audit Teams', () => {
        const mockResponse = JSON.stringify(MockAuditTeams);
        it('Should call User Service url: ' + this.baseUrl +
            'api/paymentintegrity/datamining/contractaudit/v1.0/administration/audit_team', fakeAsync(() => {
                mockbackend.connections.subscribe(conn => {
                    conn.mockRespond(new Response(new ResponseOptions({ body: mockResponse })));
                });
                service.GetAuditTeams().subscribe(data => { });
                // ts lint hates super long lines of code, thats why this url is formated like this.
                const expected = this.baseUrl + 'api/paymentintegrity/datamining/contractaudit/v1.0/administration/audit_team';
                const actual = this.lastConnection.request.url;
                expect(actual).toEqual(expected);
            }));
    });

});
