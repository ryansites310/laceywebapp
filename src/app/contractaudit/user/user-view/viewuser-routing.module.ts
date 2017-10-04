import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUserComponent } from './viewuser.component';




const routes: Routes = [
  { path: '', component: ViewUserComponent },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ViewuserRoutingModule { }
