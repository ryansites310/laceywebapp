import { Http, BaseRequestOptions, Response, ResponseOptions, Headers } from '@angular/http';
import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockConnection } from '@angular/http/testing';
import { MockBackend } from '@angular/http/testing';

import { DataTableModule, MultiSelectModule, DataTable } from 'primeng/primeng';
import { By } from '@angular/platform-browser';


import { LazyLoadEvent, FilterMetadata } from 'primeng/primeng';

import { UserComponent } from './user.component';
import { UserService } from '../service/user.service';
import { AlertService } from '../../../sdk/core/shared/services/alert.service';
import { AbstractMockObservableService } from '../../../sdk/core/test/abstractMockService.spec';
import { MockUserListData, MockUserListDataError } from './mockuserlistdata';



describe('User.Component', () => {
    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>;
    let el: HTMLElement;
    const event: LazyLoadEvent = <LazyLoadEvent>{};
    let routerStub;
    let alertService: AlertService;

    routerStub = {
        navigate: jasmine.createSpy('navigate')
    };

    class MockUserService extends AbstractMockObservableService {
        getPagedUsers(request) {
            return this;
        }
    };

    let mockUserService: MockUserService;

    beforeEach(() => {
        mockUserService = new MockUserService();
        TestBed.configureTestingModule({
            imports: [DataTableModule, RouterTestingModule, HttpModule, MultiSelectModule],
            providers: [{ provide: UserService, useValue: mockUserService }, AbstractMockObservableService, AlertService, MockBackend],
            declarations: [UserComponent]
        });

        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        alertService = TestBed.get(AlertService);
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should have correct router links', () => {
        const href = fixture.debugElement.query(By.css('button'));
        el = href.nativeElement;
        const routerLink = el.getAttribute('ng-reflect-router-link');

        expect(routerLink).toBe('/user/add');
    });

    it('should load call UserService when getPagedUsers is called ', async(() => {

        mockUserService.content = MockUserListData;

        const mockLazyLoadEvent: LazyLoadEvent = <LazyLoadEvent>{
            first: 0,
            rows: 10,
            sortField: 'testycall',
            sortOrder: 1,
            filters: { ['value']: ['test'] }
        };

        const mockRole = [];
        mockRole.push('1');
        mockRole.push('2');
        const mockRoleFilter = mockRole.join(',');

        const mockUserServiceSpy = spyOn(mockUserService, 'getPagedUsers').and.callThrough();

        component.getPagedUsers(mockLazyLoadEvent, mockRoleFilter);

        expect(mockUserServiceSpy.calls.any()).toBe(true);
        expect(component.users[0].firstName).toBe('Bob');
        expect(component.totalRecords).toBe(5);
    }));

    it('should have expected data in grid', () => {
        mockUserService.content = MockUserListData;

        const mockUserServiceSpy = spyOn(mockUserService, 'getPagedUsers').and.callThrough();

        component.getPagedUsers(component.lastLazyLoad, component.lastRoleFilter);
        fixture.detectChanges();

        const userDtList = fixture.debugElement.query(By.css('.ui-datatable-data'));
        const firstRow = userDtList.children.find(By.css('tr'));
        const allColumns = firstRow.children.find(By.css('td'));
        const firstName = firstRow.children.find(By.css('td:nth-of-type(2)')).nativeElement.innerText;
        const lastName = firstRow.children.find(By.css('td:nth-of-type(3)')).nativeElement.innerText;
        const msId = firstRow.children.find(By.css('td:nth-of-type(4)')).nativeElement.innerText;
        const roleName = firstRow.children.find(By.css('td:nth-of-type(5)')).nativeElement.innerText;

        expect(firstName).toBe('Bob');
        expect(lastName).toBe('Tester');
        expect(msId).toBe('btestycall');
        expect(roleName).toBe('Administrator');
    });

    it('should call growl when error occurs', () => {
        mockUserService.content = MockUserListDataError;

        const mockLazyLoadEvent: LazyLoadEvent = <LazyLoadEvent>{
            first: 0,
            rows: 10,
            sortField: 'testycall',
            sortOrder: 1,
            filters: { ['value']: ['test'] }
        };

        const mockRole = [];
        mockRole.push('1');
        mockRole.push('2');
        const mockRoleFilter = mockRole.join(',');

        const alertServiceSpy = spyOn(alertService, 'showError').and.callThrough();
        const mockUserServiceSpy = spyOn(mockUserService, 'getPagedUsers').and.callThrough();

        component.getPagedUsers(mockLazyLoadEvent, mockRoleFilter);
        fixture.detectChanges();

        expect(mockUserServiceSpy.calls.any()).toBe(true);
        expect(alertServiceSpy.calls.any()).toBe(true);
        expect(component.totalRecords).toBeUndefined();
    });

    it('should call goToUserViewDetail()', () => {
        const rowId = 1;
        this.tempUserRole = 'View Only User';
        spyOn(component, 'goToUserViewDetail').and.callThrough();
        component.goToUserViewDetail(rowId);
        expect(component.goToUserViewDetail).toHaveBeenCalled();

    });

});
