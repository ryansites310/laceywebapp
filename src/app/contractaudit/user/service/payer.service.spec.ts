import { Http, BaseRequestOptions, Response, ResponseOptions, Headers } from '@angular/http';
import { TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User, UserRequest, Filter, Pagination, Sort, UserResponse } from '../model/user';
import { ResponseIEnumerableUserViewModel } from '../../shared/models/models';
import { PayerService } from './payer.service';
import { environment } from '../../../../environments/environment';

describe('Payer Service', () => {
    let mockbackend: MockBackend, service: PayerService;
    const lastConnection: any = null;
    this.baseUrl = environment.apiBaseUrl;

    const MockPayers = {
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
                'name': 'UHG'
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
            providers: [PayerService, MockBackend,
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
        service = TestBed.get(PayerService);
    });

    it('should be truthy', () => {
        expect(service).toBeTruthy();
    });

    describe('Get Payers', () => {
        const mockResponse = JSON.stringify(MockPayers);
        it('Should call User Service url: ' + this.baseUrl +
            'api/paymentintegrity/datamining/contractaudit/v1.0/administration/payer', fakeAsync(() => {
                mockbackend.connections.subscribe(conn => {
                    conn.mockRespond(new Response(new ResponseOptions({ body: mockResponse })));
                });
                service.GetPayers().subscribe(data => { });
                // ts lint hates super long lines of code, thats why this url is formated like this.
                const expected = this.baseUrl + 'api/paymentintegrity/datamining/contractaudit/v1.0/administration/payer';
                const actual = this.lastConnection.request.url;
                expect(actual).toEqual(expected);
            }));
    });

});
