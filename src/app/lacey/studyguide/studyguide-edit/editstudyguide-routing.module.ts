import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditStudyGuideComponent } from './editstudyguide.component';


import { DeactivateGuard } from '../../../sdk/shared/guards/deactivate.guard';


const routes: Routes = [
  { path: '', component: EditStudyGuideComponent, canDeactivate: [DeactivateGuard] },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class EditStudyGuideRoutingModule { }
