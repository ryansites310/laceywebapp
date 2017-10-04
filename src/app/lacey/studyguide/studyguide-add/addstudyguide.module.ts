import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule, CheckboxModule, CalendarModule,
  PickListModule, DropdownModule, ConfirmDialogModule,
  ConfirmationService, AutoCompleteModule, InputTextareaModule, DialogModule, DataTableModule } from 'primeng/primeng';


import { AddStudyGuideRoutingModule } from './addstudyguide-routing.module';
import { StudyGuideBarModule } from '../shared/studyguide-bar.module';
import { AddStudyGuideComponent } from './addstudyguide.component';

@NgModule({
  imports: [
    CommonModule,
    AddStudyGuideRoutingModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    CalendarModule,
    PickListModule,
    DropdownModule,
    ConfirmDialogModule,
    AutoCompleteModule,
    InputTextareaModule,
    DialogModule,
    StudyGuideBarModule,
    DataTableModule
  ],
  declarations: [AddStudyGuideComponent ],
  providers: [ConfirmationService]
})
export class AddStudyGuideModule { }
