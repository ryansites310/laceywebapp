import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStudyGuideModule } from './studyguide-add/addstudyguide.module';
import { EditStudyGuideModule } from './studyguide-edit/editstudyguide.module';
import { StudyGuideListModule } from './studyguide-list/studyguidelist.module';


import { StudyGuideRoutingModule } from './studyguide-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StudyGuideRoutingModule,
    AddStudyGuideModule,
    EditStudyGuideModule,
    StudyGuideListModule
  ]
})
export class StudyGuideModule { }
