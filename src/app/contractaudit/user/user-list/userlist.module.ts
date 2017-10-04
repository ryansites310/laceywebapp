import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule, ButtonModule, MultiSelectModule } from 'primeng/primeng';

import { UserListRoutingModule } from './userlist-routing.module';

import { UserService } from '../service/user.service';
import { TestApi } from '../../shared/api/TestApi';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule,
    DataTableModule,
    ButtonModule,
    MultiSelectModule
  ],
  declarations: [UserComponent],
  providers: [UserService, TestApi]
})
export class UserListModule { }
