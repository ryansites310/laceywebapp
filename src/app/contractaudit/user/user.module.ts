import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserModule } from './user-add/adduser.module';
import { EditUserModule } from './user-edit/edituser.module';
import { UserListModule } from './user-list/userlist.module';
import { ViewUserModule } from './user-view/viewuser.module';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    AddUserModule,
    EditUserModule,
    UserListModule,
    ViewUserModule
  ]
})
export class UserModule { }
