import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockComponent } from './mock.component';
import { MockRoutingModule } from './mock-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MockRoutingModule
  ],
  declarations: [MockComponent]
})

export class MockModule { }
