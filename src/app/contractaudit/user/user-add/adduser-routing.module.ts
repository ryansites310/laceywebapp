import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './adduser.component';

import { DeactivateGuard } from '../../../sdk/shared/guards/deactivate.guard'; 

const routes: Routes = [
  { path: '', component: AddUserComponent, canDeactivate: [DeactivateGuard] },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AddUserRoutingModule { }
