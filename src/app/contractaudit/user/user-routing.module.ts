import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren : 'app/contractaudit/user/user-list/userlist.module#UserListModule'},
  { path: 'edit/:id', loadChildren: 'app/contractaudit/user/user-edit/edituser.module#EditUserModule'},
  { path: 'add', loadChildren: 'app/contractaudit/user/user-add/adduser.module#AddUserModule'},
  { path: 'view/:id', loadChildren: 'app/contractaudit/user/user-view/viewuser.module#ViewUserModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
