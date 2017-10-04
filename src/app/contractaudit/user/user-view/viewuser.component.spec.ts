
import { Http, BaseRequestOptions, Response, ResponseOptions, Headers } from '@angular/http';
import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewUserComponent } from './viewuser.component';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockConnection } from '@angular/http/testing';
import { MockBackend } from '@angular/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {
  DataTableModule, SharedModule, SliderModule, CaptchaModule,
  DialogModule, ChartModule, DataTable
} from 'primeng/primeng';
import { ButtonModule, CheckboxModule, PickList, DropdownModule, DataListModule } from 'primeng/primeng';

import { User, UserRequest, Filter, Pagination, Sort, UserResponse } from '../model/user';
import { ResponseIEnumerableUserViewModel, UserViewModel } from '../../shared/models/models';
import { environment } from '../../../../environments/environment';

import { UserService } from '../service/user.service';
import { AbstractMockObservableService } from '../../../sdk/core/test/abstractMockService.spec';
import { UserBarComponent } from '../shared/user-bar.component';

import * as _model from '../../shared/models/models';

describe('UserViewComponent', () => {
  let component: ViewUserComponent;
  let fixture: ComponentFixture<ViewUserComponent>;
  let userservice: UserService;
  // let el: HTMLElement;
  let mockUserView: _model.UserViewModel;

  const errorMessage: string = null;
  const data: any = null;

  class MockUserService extends AbstractMockObservableService {
    getUserById(_id: any) {
      return this;
    }
  };

  let mockService: MockUserService;

  beforeEach(() => {
    mockService = new MockUserService();
    TestBed.configureTestingModule({
      declarations: [ViewUserComponent, UserBarComponent],
      imports: [CheckboxModule, FormsModule, ReactiveFormsModule, RouterTestingModule,
        DataTableModule, SharedModule, SliderModule, CaptchaModule, DialogModule,
        ChartModule, DataListModule, HttpModule],
      providers: [{ provide: UserService, useValue: mockService },
        MockBackend, AbstractMockObservableService,
        BaseRequestOptions, User]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ViewUserComponent);
    component = fixture.componentInstance;
    userservice = TestBed.get(UserService);

  });

  const MockUser = {

    'meta': {
      'transaction_id': '7114e9a8-d52d-4b27-806b-b0b9e23818f9'
    },
    'resultMeta': {
      'pagination': {
        'start': 1,
        'totalresults': 1,
        'count': 1,
        'links': []
      }
    },
    'data': {
      'addDate': null,
      'addBy': 99999,
      'changeDate': null,
      'changeBy': 99999,
      'logicalDelete': false,
      'systemNotes': null,
      'firstName': 'Whitney',
      'lastName': 'Andrew',
      'middleName': null,
      'userName': 'wandrew1',
      'id': 1,
      'email': 'whitney.andrew@optum.com',
      'auditTeamId': 1,
      'auditTeamName': 'Team1',
      'payerId': 1,
      'payerName': 'UHC',
      'userBusinessSegments': [
        {
          'userId': 1,
          'businessSegmentId': 2,
          'businessSegmentName': 'Employer and Individual (E&I)'
        },
        {
          'userId': 1,
          'businessSegmentId': 3,
          'businessSegmentName': 'Medicare and Retirement (M&R)'
        }
      ],
      'roles': [
        {
          'userId': 1,
          'roleId': 1
        }
      ],
      'roleId': 1,
      'roleName': 'Administrator',
      'normalizedEmail': 'WHITNEY.ANDREW@OPTUM.COM',
      'normalizedUserName': 'WANDREW1',
      'errorMessage': null
    },
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

  mockUserView = MockUser.data;

  /*  mockUserView.addBy = 99999;
    mockUserView.addDate = new Date('2017-07-08T18:20:10.037');
    mockUserView.auditTeamId = 99999;
    mockUserView.businessSegments = [1, 3];
    mockUserView.changeBy =  99999;
    mockUserView.changeDate = new Date('2017-07-08T18:20:10.037');
    mockUserView.email = 'whitney.andrew@optum.com';
    mockUserView.errorMessage = null;
    mockUserView.firstName = 'Whitney';
    mockUserView.lastName = 'Andrew';
    mockUserView.middleName = null;
    mockUserView.id = 1;
    mockUserView.logicalDelete = false;
    mockUserView.normalizedEmail = 'WHITNEY.ANDREW@OPTUM.COM';
    mockUserView.normalizedUserName = 'WANDREW1';
    mockUserView.payerId = 1;
    mockUserView.roleId = 1;
    mockUserView.roleName = 'test';
    mockUserView.roles = [];
    mockUserView.systemNotes = null;
    mockUserView.userName = null;
  */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Get User By Id', () => {

    it('+ should call User service [success] when valid', fakeAsync(() => {

      mockService.content = mockUserView;
      const mockUserServiceSpy = spyOn(mockService, 'getUserById').and.callThrough();

      component.getUserById();
      fixture.detectChanges();

      expect(component.user).toEqual(mockUserView);
      expect(mockUserServiceSpy.calls.any()).toEqual(true);
    }));

    it('+ should call alert service [showError] when NOT valid', fakeAsync(() => {

      mockService.error = 'there was an error from the service';
      const mockUserServiceSpy = spyOn(mockService, 'getUserById').and.callThrough();

      component.getUserById();
      fixture.detectChanges();

      expect(component.user).toEqual(<_model.UserViewModel>{});
      expect(mockUserServiceSpy.calls.any()).toEqual(true);
    }));

  });

  // data
  it('+ Should call onNgInit()', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

});


