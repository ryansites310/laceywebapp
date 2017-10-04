import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './sdk/core/pagenotfound/pagenotfound.component';
import { HomeComponent } from './sdk/shared/home/home.component';



const routes: Routes = [
  { path: '',  component: HomeComponent, pathMatch: 'full' },
  { path: 'studyguide', loadChildren : 'app/lacey/studyguide/studyguide.module#StudyGuideModule'},
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
