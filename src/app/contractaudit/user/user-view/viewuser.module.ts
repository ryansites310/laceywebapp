import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ButtonModule, CheckboxModule, DataListModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewuserRoutingModule } from './viewuser-routing.module';
import { UserService } from '../service/user.service';
import { ViewUserComponent } from './viewuser.component';
import { UserBarModule } from '../shared/user-bar.module';

@NgModule({
  imports: [
    CommonModule,
    ViewuserRoutingModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    DataListModule,
    UserBarModule
  ],
  declarations: [ViewUserComponent],
  providers: [UserService]
})
export class ViewUserModule { }
