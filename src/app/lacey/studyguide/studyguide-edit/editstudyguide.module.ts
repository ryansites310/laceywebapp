import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, CheckboxModule, CalendarModule,
  PickListModule, DropdownModule, ConfirmDialogModule, ConfirmationService, 
  AutoCompleteModule, DataTableModule, InputTextareaModule, DialogModule } from 'primeng/primeng';


import { EditStudyGuideRoutingModule } from './editstudyguide-routing.module';
import { EditStudyGuideComponent } from './editstudyguide.component';
import { StudyGuideBarModule } from '../shared/studyguide-bar.module';
import { TestApi } from '../../shared/api/TestApi';

@NgModule({
  imports: [
    CommonModule,
    EditStudyGuideRoutingModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    CalendarModule,
    PickListModule,
    DropdownModule,
    ConfirmDialogModule,
    AutoCompleteModule,
    StudyGuideBarModule,
    DataTableModule,
    InputTextareaModule,
    DialogModule
  ],
  declarations: [EditStudyGuideComponent],
  providers: [ConfirmationService, TestApi]
})
export class EditStudyGuideModule { }
