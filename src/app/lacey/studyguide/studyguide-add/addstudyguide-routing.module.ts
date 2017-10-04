import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AddStudyGuideComponent } from './addstudyguide.component';

import { DeactivateGuard } from '../../../sdk/shared/guards/deactivate.guard'; 

const routes: Routes = [
  { path: '', component: AddStudyGuideComponent, canDeactivate: [DeactivateGuard] },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AddStudyGuideRoutingModule { }
