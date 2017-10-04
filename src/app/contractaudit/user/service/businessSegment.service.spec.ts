import { Http, BaseRequestOptions, Response, ResponseOptions, Headers } from '@angular/http';
import { TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User, UserRequest, Filter, Pagination, Sort, UserResponse } from '../model/user';
import { ResponseIEnumerableUserViewModel } from '../../shared/models/models';
import { BusinessSegmentService } from './businessSegment.service';
import { environment } from '../../../../environments/environment';

describe('Business Segment Service', () => {
    let mockbackend: MockBackend, service: BusinessSegmentService;
    const lastConnection: any = null;
    this.baseUrl = environment.apiBaseUrl;

    const MockBusinessSegment = {

        'meta': {
            'transaction_id': '9d75dd65-7118-4bb8-8fa3-fa6cc261059f'
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
                'name': 'Community and State (C&S)'
            },
            {
                'rowId': 2,
                'name': 'Employer and Individual (E&I)'
            },
            {
                'rowId': 3,
                'name': 'Medicare and Retirement (M&R)'
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
            providers: [BusinessSegmentService, MockBackend,
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
        service = TestBed.get(BusinessSegmentService);
    });

    it('should be truthy', () => {
        expect(service).toBeTruthy();
    });

    describe('GetBusinessSegments', () => {
        const mockResponse = JSON.stringify(MockBusinessSegment);
        it('Should call User Service url: ' + this.baseUrl +
            'api/paymentintegrity/datamining/contractaudit/v1.0/administration/businesssegment', fakeAsync(() => {
                mockbackend.connections.subscribe(conn => {
                    conn.mockRespond(new Response(new ResponseOptions({ body: mockResponse })));
                });
                service.GetBusinessSegments().subscribe(data => { });
                // ts lint hates super long lines of code, thats why this url is formated like this.
                const expected = this.baseUrl + 'api/paymentintegrity/datamining/contractaudit/v1.0/administration/businesssegment';
                const actual = this.lastConnection.request.url;
                expect(actual).toEqual(expected);
            }));
    });

});
