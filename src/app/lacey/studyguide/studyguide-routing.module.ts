import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren : 'app/lacey/studyguide/studyguide-list/studyguidelist.module#StudyGuideListModule'},
  { path: 'edit/:id', loadChildren: 'app/lacey/studyguide/studyguide-edit/editstudyguide.module#EditStudyGuideModule'},
  { path: 'add', loadChildren: 'app/lacey/studyguide/studyguide-add/addstudyguide.module#AddStudyGuideModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudyGuideRoutingModule { }
