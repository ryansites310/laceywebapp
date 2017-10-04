import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';
import { EditUserComponent } from './edituser.component';
import { UserComponent } from '../user-list/user.component';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';

import { UserService } from '../service/user.service';
import { BusinessSegmentService } from '../service/businessSegment.service';
import { PayerService } from '../service/payer.service';
import { AuditTeamService } from '../service/auditTeam.service';
import { RoleService } from '../service/role.service';
import { AlertService } from '../../../sdk/core/shared/services/alert.service';

import { ButtonModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { PickListModule } from 'primeng/primeng';
import { DropdownModule, AutoCompleteModule } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService, ConfirmDialog, SharedModule } from 'primeng/primeng';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageType } from '../../../sdk/core/shared/models/messageType.model';
import { AbstractMockObservableService } from '../../../sdk/core/test/abstractMockService.spec';
import { UserBarModule } from '../shared/user-bar.module';

import {
    MockUserEditData, MockBusinessSegments,
    MockPayers, MockAuditTeams, MockRoles, MockUsersData
} from './mockusereditdata';

import { Component } from '@angular/core';
import { MockComponent } from '../../shared/testhelpers/mock.component';

// Fake component class because the ConfirmDialog has issues with Karma/Jasmine
@Component({
    selector: 'p-confirmDialog',
    template: ''
})
class FakeConfirmDialogComponent {
}

describe('EditUser.Component', () => {

    let component: EditUserComponent;
    let fixture: ComponentFixture<EditUserComponent>;

    const routes: Routes = [
        { path: 'user', component: MockComponent }
    ];

    class MockUserService extends AbstractMockObservableService {
        getUserById(user) {
            return this;
        }
        updateUser(user) {
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

    class MockAlertService extends AbstractMockObservableService {
        showSuccess(extraHttpRequestParams) {
            return this;
        }

        showInfo(extraHttpRequestParams) {
            return this;
        }

        showWarning(extraHttpRequestParams) {
            return this;
        }

        showError(extraHttpRequestParams) {
            return this;
        }
    };

    class MockRoleService extends AbstractMockObservableService {
        GetRoles(extraHttpRequestParams) {
            return this;
        }
    };

    let mockUserService: MockUserService;
    let mockBusinessSegmentService: MockBusinessSegmentService;
    let mockPayerService: MockPayerService;
    let mockAuditTeamService: MockAuditTeamService;
    let mockRoleService: MockRoleService;
    let mockAlertService: MockAlertService;

    beforeEach(() => {
        mockUserService = new MockUserService();
        mockBusinessSegmentService = new MockBusinessSegmentService();
        mockPayerService = new MockPayerService();
        mockAuditTeamService = new MockAuditTeamService();
        mockRoleService = new MockRoleService();
        mockAlertService = new MockAlertService();

        TestBed.configureTestingModule({
            declarations: [EditUserComponent, MockComponent],
            imports: [RouterTestingModule.withRoutes(routes),
                HttpModule, ButtonModule,
                CheckboxModule, PickListModule,
                DropdownModule, FormsModule,
                BrowserAnimationsModule, ConfirmDialogModule,
                UserBarModule, SharedModule, AutoCompleteModule],
            providers: [{ provide: UserService, useValue: mockUserService },
            { provide: BusinessSegmentService, useValue: mockBusinessSegmentService },
            { provide: PayerService, useValue: mockPayerService },
            { provide: AuditTeamService, useValue: mockAuditTeamService },
            { provide: RoleService, useValue: mockRoleService },
            { provide: AlertService, useValue: mockAlertService },
                ConfirmationService]
        });
        TestBed.overrideModule(ConfirmDialogModule, {
            set: {
                declarations: [FakeConfirmDialogComponent],
                exports: [FakeConfirmDialogComponent]
            }
        });
        TestBed.compileComponents();
        fixture = TestBed.createComponent(EditUserComponent);
        component = fixture.componentInstance;
        //        alertService = TestBed.get(AlertService);
        fixture.detectChanges();
    });


    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should have roles, teams, payers populated upon display', () => {
        mockBusinessSegmentService.content = MockBusinessSegments;
        mockAuditTeamService.content = MockAuditTeams;
        mockPayerService.content = MockPayers;
        mockRoleService.content = MockRoles;
        mockUserService.content = MockUserEditData.data;

        component.ngOnInit();

        fixture.detectChanges();

        fixture.whenStable();

        expect(component.roleList.length).toEqual(6);
        expect(component.teamList.length).toBeGreaterThanOrEqual(1);
        expect(component.payerList.length).toBeGreaterThanOrEqual(1);

    });

    it('should have save button disabled and return button enabled upon display', () => {
        mockBusinessSegmentService.content = MockBusinessSegments;
        mockAuditTeamService.content = MockAuditTeams;
        mockPayerService.content = MockPayers;
        mockRoleService.content = MockRoles;
        mockUserService.content = MockUserEditData.data;

        component.ngOnInit();

        fixture.detectChanges();

        fixture.whenStable();

        const saveButtonDisabled = fixture.debugElement
            .query(By.css('#edituserBtnSave'))
            .properties['disabled'];
        expect(saveButtonDisabled).toBeTruthy();

        const returnButtonDisabled = fixture.debugElement
            .query(By.css('#edituserBtnReturn'))
            .properties['disabled'];
        expect(returnButtonDisabled).toBeFalsy();

    });

    it('TC147749 - The save button is enabled when any updatable fields are changed and form is valid',
        async(() => {
            mockBusinessSegmentService.content = MockBusinessSegments;
            mockAuditTeamService.content = MockAuditTeams;
            mockPayerService.content = MockPayers;
            mockRoleService.content = MockRoles;
            mockUserService.content = MockUserEditData.data;

            component.ngOnInit();

            fixture.detectChanges();
            fixture.whenStable().then(r => {
                const firstName = fixture.debugElement
                    .query(By.css('#edituserTbxFirstName'))
                    .nativeElement.value;
                fixture.debugElement.query(By.css('#edituserTbxFirstName')).nativeElement.value = 'Bob';
                const evt = document.createEvent('Event');
                evt.initEvent('input', true, false);
                fixture.debugElement.query(By.css('#edituserTbxFirstName')).nativeElement.dispatchEvent(evt);
                fixture.detectChanges();
                const saveButtonDisabled = fixture.debugElement
                    .query(By.css('#edituserBtnSave'))
                    .properties['disabled'];
                expect(saveButtonDisabled).toBeFalsy();
            });

        }));


    it('TC147751 - The user can exit the edit user form with out saving new information', fakeAsync(() => {

        mockBusinessSegmentService.content = MockBusinessSegments;
        mockAuditTeamService.content = MockAuditTeams;
        mockPayerService.content = MockPayers;
        mockRoleService.content = MockRoles;
        mockUserService.content = MockUserEditData.data;
        component.ngOnInit();

        fixture.detectChanges();
        fixture.whenStable().then(r => {
            const firstName = fixture.debugElement
                .query(By.css('#edituserTbxFirstName'))
                .nativeElement.value;
            fixture.debugElement.query(By.css('#edituserTbxFirstName')).nativeElement.value = 'Bob';
            const evt = document.createEvent('Event');
            evt.initEvent('input', true, false);
            fixture.debugElement.query(By.css('#edituserTbxFirstName')).nativeElement.dispatchEvent(evt);
            fixture.detectChanges();

            fixture.debugElement.query(By.css('#edituserBtnReturn')).nativeElement.click();
            evt.initEvent('button', true, false);
            fixture.debugElement.query(By.css('#edituserBtnReturn')).nativeElement.dispatchEvent(evt);

            fixture.detectChanges();
            tick();
            expect(location.pathname.endsWith('/user')).toBe(true);

        });
    }));


    it('TC147752 - Non-updatable fields are display only on the edit user page', async(() => {

        mockBusinessSegmentService.content = MockBusinessSegments;
        mockAuditTeamService.content = MockAuditTeams;
        mockPayerService.content = MockPayers;
        mockRoleService.content = MockRoles;
        mockUserService.content = MockUserEditData.data;

        component.ngOnInit();

        fixture.detectChanges();
        fixture.whenStable().then(r => {

            const userAdded = fixture.debugElement.query(By.css('label[id=edituserLblUserAdded]'));
            console.log('userAdded:' + userAdded);

            const evt = document.createEvent('Event');
            evt.initEvent('label', true, false);
            fixture.debugElement.query(By.css('#edituserLblUserAdded')).nativeElement.dispatchEvent(evt);
            fixture.detectChanges();

            fixture.debugElement.query(By.css('#edituserLblUserAdded')).nativeElement.value = 'Bob';

            const userAddedChanged = fixture.debugElement
                .query(By.css('#edituserLblUserAdded'))
                .nativeElement.value;
            console.log('userAddedChanged:' + userAddedChanged);

            expect(userAdded).toEqual(userAddedChanged);
        });
    }));

    it('TC149607 - The save button is disabled when any required fields do not contain values', async(() => {
        mockBusinessSegmentService.content = MockBusinessSegments;
        mockAuditTeamService.content = MockAuditTeams;
        mockPayerService.content = MockPayers;
        mockRoleService.content = MockRoles;
        mockUserService.content = MockUserEditData.data;

        component.ngOnInit();

        fixture.detectChanges();
        fixture.whenStable().then(r => {
            const firstName = fixture.debugElement.query(By.css('#edituserTbxFirstName')).nativeElement.value;

            fixture.debugElement.query(By.css('#edituserTbxFirstName')).nativeElement.value = '';
            const evt = document.createEvent('Event');
            evt.initEvent('input', true, false);
            fixture.debugElement.query(By.css('#edituserTbxFirstName')).nativeElement.dispatchEvent(evt);
            fixture.detectChanges();

            const saveButtonDisabled = fixture.debugElement
                .query(By.css('#edituserBtnSave'))
                .properties['disabled'];
            expect(saveButtonDisabled).toEqual(true);
        });
    }));

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
        fixture.whenStable().then(r => {
            expect(bsServiceSpy.calls.any()).toBe(true);
            expect(roleServiceSpy.calls.any()).toBe(true);
            expect(payerServiceSpy.calls.any()).toBe(true);
            expect(auditTeamServiceSpy.calls.any()).toBe(true);
            expect(component.sourceSegments.length).toBeGreaterThanOrEqual(1);
        }
        );
    });

    it('should call alert service when edituser successful', () => {

        mockAlertService.content = 'Saved Successfully';
        mockBusinessSegmentService.content = MockBusinessSegments;
        mockAuditTeamService.content = MockAuditTeams;
        mockPayerService.content = MockPayers;
        mockRoleService.content = MockRoles;

        component.ngOnInit();
        fixture.detectChanges();
        fixture.whenStable().then(r => {
            fixture.debugElement.query(By.css('#edituserTbxFirstName')).nativeElement.value = 'Bob';
            const evt = document.createEvent('Event');
            evt.initEvent('input', true, false);
            fixture.debugElement.query(By.css('#edituserTbxFirstName')).nativeElement.dispatchEvent(evt);
        });

        const mockAlertServiceSpy = spyOn(mockAlertService, 'showSuccess').and.callThrough();
        const mockUserServiceSpy = spyOn(mockUserService, 'updateUser').and.callThrough();

        component.editUser();
        fixture.detectChanges();

        fixture.whenStable().then(r => {
            expect(mockUserServiceSpy.calls.any()).toBe(true);
            expect(mockAlertServiceSpy.calls.any()).toBe(true);
        });
    });

    it('should call editUser()', () => {
        const userServiceSpy = spyOn(mockUserService, 'updateUser').and.callThrough();
        const editComponentSpy = spyOn(component, 'editUser').and.callThrough();
        component.editUser();
        expect(userServiceSpy.calls.any()).toBe(true);
        expect(editComponentSpy.calls.any()).toBe(true);
    });

    // autocomplete tests...
    it('should filter Payers', () => {
        const event = { query: 'UHG' };
        mockPayerService.content = MockPayers;

        component.ngOnInit();
        fixture.detectChanges();
        fixture.whenStable();

        spyOn(component, 'onFilterPayers').and.callThrough();
        component.onFilterPayers(event);

        expect(component.filteredPayers.length).toEqual(1);
        expect(component.filteredPayers).toContain(event.query);
    });

    it('should filter Roles', () => {
        const event = { query: 'Claim Auditor' };
        mockRoleService.content = MockRoles;

        component.ngOnInit();
        fixture.detectChanges();
        fixture.whenStable();

        spyOn(component, 'onFilterRoles').and.callThrough();
        component.onFilterRoles(event);

        expect(component.filteredRoles.length).toEqual(2);
        expect(component.filteredRoles).toContain(event.query);
    });

    it('should filter Teams', () => {
        const event = { query: 'Team' };
        mockAuditTeamService.content = MockAuditTeams;

        component.ngOnInit();
        fixture.detectChanges();
        fixture.whenStable();

        spyOn(component, 'onFilterTeams').and.callThrough();
        component.onFilterTeams(event);

        expect(component.teamList.length).toEqual(2);
    });

    it('roles should filter correctly', async(() => {
        mockRoleService.content = MockRoles;

        const roleServiceSpy = spyOn(mockRoleService, 'GetRoles').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.onFilterRoles({ query: 'Admin' });
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

        component.onFilterPayers({ query: 'UH' });
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

        component.onFilterTeams({ query: 'Tea' });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            expect(component.filteredTeams).toEqual(jasmine.arrayContaining(['Team 1']));
        });
    }));

    it('role selection should set user model value correctly', async(() => {
        mockRoleService.content = MockRoles;
        mockUserService.content = MockUserEditData.data;
        mockBusinessSegmentService.content = MockBusinessSegments;
        mockPayerService.content = MockPayers;
        mockAuditTeamService.content = MockAuditTeams;

        component.ngOnInit();

        component.onSelectRole('Administrator');

        fixture.detectChanges();
        fixture.whenStable().then(result => {
            expect(component.studyGuide.roleId).toBe(1);
            expect(component.studyGuide.roleName).toBe('Administrator');
        });
    }));

    it('role selection should set isValidRole to false', async(() => {
        mockRoleService.content = MockRoles;

        // const roleServiceSpy = spyOn(mockRoleService, 'GetRoles').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.onSelectRole('Janitor');
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            expect(component.isValidRole).toBe(false);
        });
    }));

    it('roles should validate correctly', (() => {
        mockRoleService.content = MockRoles;

        const roleServiceSpy = spyOn(mockRoleService, 'GetRoles').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.onKeyupRole({ target: { value: 'Administrator' } });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            const elm = fixture.debugElement.query(By.css('#adduserDdlRole ~ div.alert'));
            expect(elm.styles['display']).toBe('none');
        }, (err) => { fail(err); });
    }));

    it('payer should validate correctly', async(() => {
        mockPayerService.content = MockPayers;

        const payerServiceSpy = spyOn(mockPayerService, 'GetPayers').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.onKeyupPayer({ target: { value: 'UHG' } });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            const elm = fixture.debugElement.query(By.css('#adduserDdlPayer ~ div.alert'));
            expect(elm.styles['display']).toBe('none');
        }, (err) => { fail(err); });
    }));

    it('audit team should validate correctly', async(() => {
        mockAuditTeamService.content = MockAuditTeams;

        const auditTeamServiceSpy = spyOn(mockAuditTeamService, 'GetAuditTeams').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.onKeyupTeam({ target: { value: 'Team 1' } });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            const elm = fixture.debugElement.query(By.css('#adduserDdlAuditTeam ~ div.alert'));
            expect(elm.styles['display']).toBe('none');
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
            expect(elm.styles['display']).toBe('none');
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
            expect(elm.styles['display']).toBe('none');
        }, (err) => { fail(err); });
    }));

    it('audit team field should validate correctly on blur', async(() => {
        mockAuditTeamService.content = MockAuditTeams;

        const auditTeamServiceSpy = spyOn(mockAuditTeamService, 'GetAuditTeams').and.callThrough();
        component.ngOnInit();
        fixture.detectChanges();

        component.onBlurTeam({ target: { value: 'Team 1' } });
        fixture.detectChanges();
        fixture.whenStable().then(result => {
            const elm = fixture.debugElement.query(By.css('#adduserDdlAuditTeam ~ div.alert'));
            expect(elm.styles['display']).toBe('none');
        }, (err) => { fail(err); });
    }));

    it('should set html element as valid', () => {
        component.ngOnInit();
        fixture.detectChanges();

        spyOn(component, 'setElementValidation').and.callThrough();
        component.setElementValidation('edituserDdlRole', true);
        expect(component.setElementValidation).toHaveBeenCalled();
    });

    it('should set html element as invalid', () => {
        component.ngOnInit();
        fixture.detectChanges();

        spyOn(component, 'setElementValidation').and.callThrough();
        component.setElementValidation('edituserDdlRole', false);
        expect(component.setElementValidation).toHaveBeenCalled();
    });

    it('should set picklistIsDirty to true', () => {
        const event = {};

        component.ngOnInit();
        fixture.detectChanges();
        fixture.whenStable();

        spyOn(component, 'onPicklistChange').and.callThrough();
        component.onPicklistChange(event);
        expect(component.picklistIsDirty).toEqual(true);
    });

    it('should return true from canDeactivate()', () => {
        component.ngOnInit();
        fixture.detectChanges();
        fixture.whenStable();

        component.successfulSave = true;
        component.picklistIsDirty = false;

        spyOn(component, 'canDeactivate').and.callThrough();
        component.canDeactivate();
        expect(component.canDeactivate).toBeTruthy();
    });

    it('should return true from canDeactivate()', () => {
        component.ngOnInit();
        fixture.detectChanges();
        fixture.whenStable();

        component.successfulSave = false;
        component.picklistIsDirty = true;

        spyOn(component, 'canDeactivate').and.callThrough();
        component.canDeactivate();
        expect(component.canDeactivate).toBeTruthy();
    });

});
