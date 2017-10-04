import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudyGuideBarComponent } from '../shared/studyguide-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [StudyGuideBarComponent],
  exports: [StudyGuideBarComponent]
})
export class StudyGuideBarModule { }
