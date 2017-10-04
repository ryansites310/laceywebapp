import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule, ButtonModule, MultiSelectModule } from 'primeng/primeng';

import { StudyGuideListRoutingModule } from './studyguidelist-routing.module';

import { TestApi } from '../../shared/api/TestApi';
import { StudyGuideComponent } from './studyguide.component';

@NgModule({
  imports: [
    CommonModule,
    StudyGuideListRoutingModule,
    DataTableModule,
    ButtonModule,
    MultiSelectModule
  ],
  declarations: [StudyGuideComponent],
  providers: [TestApi]
})
export class StudyGuideListModule { }
