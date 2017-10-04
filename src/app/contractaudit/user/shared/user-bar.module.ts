import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { UserBarComponent } from '../shared/user-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UserBarComponent],
  exports: [UserBarComponent]
})
export class UserBarModule { }
