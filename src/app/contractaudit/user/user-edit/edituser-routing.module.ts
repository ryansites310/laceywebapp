import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './edituser.component';


import { DeactivateGuard } from '../../../sdk/shared/guards/deactivate.guard';


const routes: Routes = [
  { path: '', component: EditUserComponent, canDeactivate: [DeactivateGuard] },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class EditUserRoutingModule { }
