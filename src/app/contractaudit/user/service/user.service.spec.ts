import { Http, BaseRequestOptions, Response, ResponseOptions, Headers } from '@angular/http';
import { TestBed, tick, fakeAsync, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User, UserRequest, Filter, Pagination, Sort, UserResponse } from '../model/user';
import { ResponseIEnumerableUserViewModel } from '../../shared/models/models';
import { UserService } from './user.service';
import { environment } from '../../../../environments/environment';

describe('UserService', () => {
  let mockbackend: MockBackend, service: UserService;
  const lastConnection: any = null;
  this.baseUrl = environment.apiBaseUrl;

  const MockUser = {
    'city': {
      'id': 0,
      'name': 'Lima',
      'coord': {
        'lon': -84.1459,
        'lat': 40.7399
      },
      'country': 'US',
      'population': 0
    },
    'cod': '200',
    'message': 0.1124246,
    'cnt': 16,
    'list': [
      {
        'dt': 1497373200,
        'temp': {
          'day': 71.6,
          'min': 63.99,
          'max': 71.6,
          'night': 63.99,
          'eve': 71.6,
          'morn': 71.6
        },
        'pressure': 995.95,
        'humidity': 50,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }],
        'speed': 3.94,
        'deg': 273,
        'clouds': 64,
        'rain': 1.69
      },
      {
        'dt': 1497373200,
        'temp': {
          'day': 71.6,
          'min': 63.99,
          'max': 71.6,
          'night': 63.99,
          'eve': 71.6,
          'morn': 71.6
        },
        'pressure': 995.95,
        'humidity': 50,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }],
        'speed': 3.94,
        'deg': 273,
        'clouds': 64,
        'rain': 1.69
      }]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, MockBackend,
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
    service = TestBed.get(UserService);
  });

  it('should be truthy', () => {
    expect(service).toBeTruthy();
  });

  describe('Get User By ID', () => {
    const mockResponse = JSON.stringify(MockUser);
    it('Should call User Service url: ' + this.baseUrl +
      'api/paymentintegrity/datamining/contractaudit/v1.0/administration/user/1', fakeAsync(() => {
        mockbackend.connections.subscribe(conn => {
          conn.mockRespond(new Response(new ResponseOptions({ body: mockResponse })));
        });
        service.getUserById('1').subscribe(data => { });
        // ts lint hates super long lines of code, thats why this url is formated like this.
        const expected = this.baseUrl + 'api/paymentintegrity/datamining/contractaudit/v1.0/administration/user/1';
        const actual = this.lastConnection.request.url;
        expect(actual).toEqual(expected);
      }));
  });

  describe('Get Paged Users', () => {
    const mockResponse = JSON.stringify(MockUser);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const request = new UserRequest();

    it('Should call User Service url: ' + this.baseUrl +
      'api/paymentintegrity/datamining/contractaudit/v1.0/administration/user/search, { headers: headers }',
      fakeAsync(() => {
        mockbackend.connections.subscribe(conn => {
          conn.mockRespond(new Response(new ResponseOptions({ body: mockResponse })));
        });
        service.getPagedUsers(request).map(result => result as ResponseIEnumerableUserViewModel);
        // ts lint hates super long lines of code, thats why this url is formated like this.
        const expected = this.baseUrl + 'api/paymentintegrity/datamining/contractaudit/v1.0/administration/user/search';
        const actual = this.lastConnection.request.url;
        expect(actual).toEqual(expected);
      }));
  });

  describe('Add User', () => {
    const mockResponse = JSON.stringify(MockUser);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    it('Should call User Service url: ' + this.baseUrl +
      'api/paymentintegrity/datamining/contractaudit/v1.0/administration/user, { headers: headers }',
      fakeAsync(() => {
        mockbackend.connections.subscribe(conn => {
          conn.mockRespond(new Response(new ResponseOptions({ body: mockResponse })));
        });
        service.addUser(MockUser).subscribe(data => { });
        // ts lint hates super long lines of code, thats why this url is formated like this.
        const expected = this.baseUrl + 'api/paymentintegrity/datamining/contractaudit/v1.0/administration/user';
        const actual = this.lastConnection.request.url;
        expect(actual).toEqual(expected);
      }));
  });

  describe('Update User', () => {
    const mockResponse = JSON.stringify(MockUser);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    it('Should call User Service url: ' + this.baseUrl +
      'api/paymentintegrity/datamining/contractaudit/v1.0/administration/user, { headers: headers }',
      fakeAsync(() => {
        mockbackend.connections.subscribe(conn => {
          conn.mockRespond(new Response(new ResponseOptions({ body: mockResponse })));
        });
        service.updateUser(MockUser).subscribe(data => { });
        // ts lint hates super long lines of code, thats why this url is formated like this.
        const expected = this.baseUrl + 'api/paymentintegrity/datamining/contractaudit/v1.0/administration/user';
        const actual = this.lastConnection.request.url;
        expect(actual).toEqual(expected);
      }));
  });

  describe('Delete User By ID', () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    it('Should call User Service url: ' + this.baseUrl +
      'api/paymentintegrity/datamining/contractaudit/v1.0/administration/user/1', fakeAsync(() => {

        service.deleteUserById('1').map(r => r.json());
        const expected = this.baseUrl + 'api/paymentintegrity/datamining/contractaudit/v1.0/administration/user/1';
        const actual = this.lastConnection.request.url;
        expect(actual).toEqual(expected);
      }));
  });

});
