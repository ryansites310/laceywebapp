import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, CheckboxModule, CalendarModule,
  PickListModule, DropdownModule, ConfirmDialogModule,
  ConfirmationService, AutoCompleteModule, InputTextareaModule, DialogModule, DataTableModule } from 'primeng/primeng';


import { AddUserRoutingModule } from './adduser-routing.module';
import { UserService } from '../service/user.service';
import { BusinessSegmentService } from '../service/businessSegment.service';
import { PayerService } from '../service/payer.service';
import { AuditTeamService } from '../service/auditTeam.service';
import { RoleService } from '../service/role.service';
import { UserBarModule } from '../shared/user-bar.module';
import { AddUserComponent } from './adduser.component';

@NgModule({
  imports: [
    CommonModule,
    AddUserRoutingModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    CalendarModule,
    PickListModule,
    DropdownModule,
    ConfirmDialogModule,
    AutoCompleteModule,
    InputTextareaModule,
    DialogModule,
    UserBarModule,
    DataTableModule
  ],
  declarations: [AddUserComponent ],
  providers: [UserService, BusinessSegmentService, PayerService,
              AuditTeamService, RoleService, ConfirmationService]
})
export class AddUserModule { }
