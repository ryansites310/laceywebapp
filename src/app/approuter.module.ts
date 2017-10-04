import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './sdk/core/pagenotfound/pagenotfound.component';
import { HomeComponent } from './sdk/shared/home/home.component';



const routes: Routes = [
  { path: '',  component: HomeComponent, pathMatch: 'full' },
  { path: 'user', loadChildren : 'app/contractaudit/user/user.module#UserModule'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ApprouterModule { }
