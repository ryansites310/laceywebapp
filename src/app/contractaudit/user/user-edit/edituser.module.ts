import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, CheckboxModule, CalendarModule,
  PickListModule, DropdownModule, ConfirmDialogModule, ConfirmationService, 
  AutoCompleteModule, DataTableModule, InputTextareaModule, DialogModule } from 'primeng/primeng';


import { EditUserRoutingModule } from './edituser-routing.module';
import { UserService } from '../service/user.service';
import { BusinessSegmentService } from '../service/businessSegment.service';
import { PayerService } from '../service/payer.service';
import { AuditTeamService } from '../service/auditTeam.service';
import { RoleService } from '../service/role.service';

import { EditUserComponent } from './edituser.component';
import { UserBarModule } from '../shared/user-bar.module';
import { TestApi } from '../../shared/api/TestApi';

@NgModule({
  imports: [
    CommonModule,
    EditUserRoutingModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    CalendarModule,
    PickListModule,
    DropdownModule,
    ConfirmDialogModule,
    AutoCompleteModule,
    UserBarModule,
    DataTableModule,
    InputTextareaModule,
    DialogModule
  ],
  declarations: [EditUserComponent],
  providers: [UserService, BusinessSegmentService, PayerService, AuditTeamService, RoleService, ConfirmationService, TestApi]
})
export class EditUserModule { }
