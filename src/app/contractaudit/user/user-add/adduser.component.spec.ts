import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AddUserComponent } from './adduser.component';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';

import { UserService } from '../service/user.service';
import { BusinessSegmentService } from '../service/businessSegment.service';
import { PayerService } from '../service/payer.service';
import { RoleService } from '../service/role.service';
import { AuditTeamService } from '../service/auditTeam.service';

import { ButtonModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { PickListModule } from 'primeng/primeng';
import { DropdownModule, AutoCompleteModule } from 'primeng/primeng';
import {
    ConfirmDialogModule, ConfirmationService,
    ConfirmDialog, Confirmation
} from 'primeng/primeng';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertService } from '../../../sdk/core/shared/services/alert.service';
import { MessageType } from '../../../sdk/core/shared/models/messageType.model';
import { AbstractMockObservableService } from '../../../sdk/core/test/abstractMockService.spec';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

describe('AddUser.Component', () => {
    let component: AddUserComponent;
    let fixture: ComponentFixture<AddUserComponent>;
    let el: HTMLElement;
    let alertService: AlertService;

    class MockConfirmationService extends AbstractMockObservableService {
        confirm() {
            return this;
        }
    };

    class MockUserService extends AbstractMockObservableService {
        addUser(user) {
            return this;
        }
    };

    class MockBusinessSegmentService extends AbstractMockObservableService {
        GetBusinessSegments(extraHttpRequestParams) {
            return this;
        }
    };

    class MockPayerService extends AbstractMockObservableService {
        GetPayers(extraHttpRequestParams) {
            return this;
        }
    };

    class MockAuditTeamService extends AbstractMockObservableService {
        GetAuditTeams(extraHttpRequestParams) {
            return this;
        }
    };

    class MockRoleService extends AbstractMockObservableService {
        GetRoles(extraHttpRequestParams) {
            return this;
        }
    }

    let mockUserService: MockUserService;
    let mockBusinessSegmentService: MockBusinessSegmentService;
    let mockPayerService: MockPayerService;
    let mockAuditTeamService: MockAuditTeamService;
    let mockRoleService: MockRoleService;
    let mockConfirmationService: MockConfirmationService;

    beforeEach(() => {
        mockUserService = new MockUserService();
        mockBusinessSegmentService = new MockBusinessSegmentService();
        mockPayerService = new MockPayerService();
        mockAuditTeamService = new MockAuditTeamService();
        mockRoleService = new MockRoleService();
        mockConfirmationService = new MockConfirmationService();

        TestBed.configureTestingModule({
            declarations: [AddUserComponent],
            imports: [RouterTestingModule,
                HttpModule, ButtonModule,
                CheckboxModule, PickListModule,
                DropdownModule, FormsModule, BrowserAnimationsModule, ConfirmDialogModule, AutoCompleteModule],
            providers: [{ provide: UserService, useValue: mockUserService },
            { provide: BusinessSegmentService, useValue: mockBusinessSegmentService },
            { provide: PayerService, useValue: mockPayerService },
            { provide: AuditTeamService, useValue: mockAuditTeamService },
            { provide: RoleService, useValue: mockRoleService },
                AlertService, ConfirmationService]
        });
        fixture = TestBed.createComponent(AddUserComponent);
        component = fixture.componentInstance;
        alertService = TestBed.get(AlertService);
        fixture.detectChanges();
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

    const MockBusinessSegments = {
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

    const MockRoles = {
        'meta': {
            'transaction_id': '8f18069b-ae0b-440c-a58f-21cbb76f2d39'
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


    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should call Services OnInit()', () => {
        mockBusinessSegmentService.content = MockBusinessSegments;
        mockAuditTeamService.content = MockAuditTeams;
        mockPayerService.content = MockPayers;
        mockRoleService.content = MockRoles;

        const bsServiceSpy = spyOn(mockBusinessSegmentService, 'GetBusinessSegments').and.callThrough();
        const payerServiceSpy = spyOn(mockPayerService, 'GetPayers').and.callThrough();
        const auditTeamServiceSpy = spyOn(mockAuditTeamService, 'GetAuditTeams').and.callThrough();
        const roleServiceSpy = spyOn(mockRoleService, 'GetRoles').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        expect(bsServiceSpy.calls.any()).toBe(true);
        expect(payerServiceSpy.calls.any()).toBe(true);
        expect(auditTeamServiceSpy.calls.any()).toBe(true);
        expect(roleServiceSpy.calls.any()).toBe(true);
        expect(component.sourceSegments.length).toBe(3);
    });

    it('should have good data', () => {
        component.user.firstName = 'Whitney';
        component.user.middleName = 'T';
        component.user.lastName = 'Andrew';
        component.user.userName = 'wandrew1';
        component.user.email = 'whitney.andrew@optum.com';
        component.user.roleName = 'Administrator';
        component.targetBusinessSegments = <DropdownModule[]>[{ name: 'Employer and Individual (E&I)', rowId: 1 }];

        fixture.detectChanges();
        fixture.whenStable().then(r => {
            const firstName = fixture.debugElement.query(By.css('#adduserTbxFirstName')).nativeElement.value;
            const middleName = fixture.debugElement.query(By.css('#adduserTbxMiddleName')).nativeElement.value;
            const lastName = fixture.debugElement.query(By.css('#adduserTbxLastName')).nativeElement.value;
            const userName = fixture.debugElement.query(By.css('#adduserTbxMsid')).nativeElement.value;
            const email = fixture.debugElement.query(By.css('#adduserTbxEmail')).nativeElement.value;
            const role = fixture.debugElement.query(By.css('#adduserDdlRole > input')).nativeElement.value;

            expect(firstName).toBe(component.user.firstName);
            expect(middleName).toBe(component.user.middleName);
            expect(lastName).toBe(component.user.lastName);
            expect(userName).toBe(component.user.userName);
            expect(email).toBe(component.user.email);
            expect(role).toBe(component.user.roleName);
        });

    });

    it('should call alert service when addUser successful', () => {
        mockUserService.content = MockUser;

        component.targetBusinessSegments = <DropdownModule[]>[{ name: 'Test', rowId: 1 }];
        component.user.firstName = 'lajdaljd';
        component.user.lastName = 'jadlajd';
        component.user.userName = 'jdlajdal';
        component.user.email = 'jdlaj.kadka@sjdlsj.com';
        component.user.roleId = 1;


        const alertServiceSpy = spyOn(alertService, 'showSuccess').and.callThrough();
        const mockUserServiceSpy = spyOn(mockUserService, 'addUser').and.callThrough();
        fixture.detectChanges();
        const evt = document.createEvent('Event');
        evt.initEvent('button', true, false);
        fixture.debugElement.query(By.css('#adduserBtnSave')).nativeElement.dispatchEvent(evt);
        fixture.detectChanges();
        fixture.whenStable().then(r => {
            expect(mockUserServiceSpy.calls.any()).toBe(true);
            expect(alertServiceSpy.calls.any()).toBe(true);
        }
        );
    });

    it('should call canDeactivate when exiting form with unsaved changes', async(() => {
        mockUserService.content = MockUser;

        component.targetBusinessSegments = <DropdownModule[]>[{ name: 'Test', rowId: 1 }];
        component.user.firstName = 'lajdaljd';
        component.user.lastName = 'jadlajd';
        component.user.userName = 'jdlajdal';
        component.user.email = 'jdlaj.kadka@sjdlsj.com';
        component.user.roleId = 1;
        const evt = document.createEvent('Event');
        evt.initEvent('input', true, false);
        fixture.debugElement.query(By.css('#adduserTbxFirstName')).nativeElement.dispatchEvent(evt);

        fixture.detectChanges();
        component.canDeactivate();
        fixture.detectChanges();
        fixture.whenStable();
        const confMessage = fixture.debugElement
            .query(By.css('.ui-confirmdialog-message')).nativeElement;
        expect(confMessage.outerHTML)
            .toContain('<span class="ui-confirmdialog-message"></span>');
    }));

    it('should call addUser()', async(() => {
        component.targetBusinessSegments = <DropdownModule[]>[{ name: 'Test', rowId: 1 }];
        component.user.firstName = 'lajdaljd';
        component.user.lastName = 'jadlajd';
        component.user.userName = 'jdlajdal';
        component.user.email = 'jdlaj.kadka@sjdlsj.com';
        component.user.roleName = 'Adminstrator';
        component.user.roleId = 1;
        const evt = document.createEvent('Event');
        evt.initEvent('input', true, false);
        fixture.debugElement.query(By.css('#adduserTbxFirstName')).nativeElement.dispatchEvent(evt);

        const alertServiceSpy = spyOn(alertService, 'showSuccess').and.callThrough();
        const mockUserServiceSpy = spyOn(mockUserService, 'addUser').and.callThrough();

        fixture.detectChanges();
        component.addUser();
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            expect(mockUserServiceSpy.calls.any()).toBe(true);
        });
    }));

    it('roles should filter correctly', async(() => {
        mockRoleService.content = MockRoles;

        const roleServiceSpy = spyOn(mockRoleService, 'GetRoles').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.filterRoles({ query: 'Admin' });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            expect(component.filteredRoles).toEqual(jasmine.arrayContaining(['Administrator']));
        });
    }));

    it('payers should filter correctly', async(() => {
        mockPayerService.content = MockPayers;

        const payerServiceSpy = spyOn(mockPayerService, 'GetPayers').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.filterPayers({ query: 'UH' });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            expect(component.filteredPayers).toEqual(jasmine.arrayContaining(['UHG']));
        });
    }));

    it('audit teams should filter correctly', async(() => {
        mockAuditTeamService.content = MockAuditTeams;

        const auditTeamServiceSpy = spyOn(mockAuditTeamService, 'GetAuditTeams').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.filterTeams({ query: 'Tea' });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            expect(component.filteredTeams).toEqual(jasmine.arrayContaining(['Team 1']));
        });
    }));

    it('role selection should set user model value correctly', async(() => {
        mockRoleService.content = MockRoles;

        const roleServiceSpy = spyOn(mockRoleService, 'GetRoles').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.onSelectRole('Administrator');
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            expect(component.user.roleId).toBe(1);
        });

    }));

    it('roles should validate correctly', (() => {
        mockRoleService.content = MockRoles;

        const roleServiceSpy = spyOn(mockRoleService, 'GetRoles').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.validateRoles({ target: { value: 'Administrator' } });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            const elm = fixture.debugElement.query(By.css('#adduserDdlRole ~ div.alert'));
            expect(elm.properties['hidden']).toBeTruthy();
        }, (err) => { fail(err); });
    }));

    it('payer should validate correctly', async(() => {
        mockPayerService.content = MockPayers;

        // const payerServiceSpy = spyOn(mockPayerService, 'GetPayers').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.validatePayers({ target: { value: 'UHG' } });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            const elm = fixture.debugElement.query(By.css('#adduserDdlPayer ~ div.alert'));
            const displayProperty = elm.properties['hidden'];
            expect(displayProperty).toBeTruthy();
        }, (err) => { fail(err); });

    }));

    it('audit team should validate correctly', async(() => {
        mockAuditTeamService.content = MockAuditTeams;

        const auditTeamServiceSpy = spyOn(mockAuditTeamService, 'GetAuditTeams').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.validateAuditTeams({ target: { value: 'Team 1' } });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            const elm = fixture.debugElement.query(By.css('#adduserDdlAuditTeam ~ div.alert'));
            expect(elm.properties['hidden']).toBeTruthy();
        }, (err) => { fail(err); });
    }));

    it('role field should validate correctly on blur', (() => {
        mockRoleService.content = MockRoles;

        const roleServiceSpy = spyOn(mockRoleService, 'GetRoles').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.onBlurRole({ target: { value: 'Administrator' } });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            const elm = fixture.debugElement.query(By.css('#adduserDdlRole ~ div.alert'));
            expect(elm.properties['hidden']).toBeTruthy();
        }, (err) => { fail(err); });
    }));

    it('payer field should validate correctly on blur', async(() => {
        mockPayerService.content = MockPayers;

        const payerServiceSpy = spyOn(mockPayerService, 'GetPayers').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.onBlurPayer({ target: { value: 'UHG' } });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            const elm = fixture.debugElement.query(By.css('#adduserDdlPayer ~ div.alert'));
            expect(elm.properties['hidden']).toBeTruthy();
        }, (err) => { fail(err); });

    }));

    it('audit team field should validate correctly on blur', async(() => {
        mockAuditTeamService.content = MockAuditTeams;

        const auditTeamServiceSpy = spyOn(mockAuditTeamService, 'GetAuditTeams').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.onBlurAuditTeam({ target: { value: 'ASO Team 1' } });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            const elm = fixture.debugElement.query(By.css('#adduserDdlAuditTeam ~ div.alert'));
            expect(elm.properties['hidden']).toBeTruthy();
        }, (err) => { fail(err); });
    }));

});
