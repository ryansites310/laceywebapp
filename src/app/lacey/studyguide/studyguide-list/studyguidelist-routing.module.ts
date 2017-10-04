import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyGuideComponent } from './studyguide.component';




const routes: Routes = [
  { path: '', component: StudyGuideComponent },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class StudyGuideListRoutingModule { }
