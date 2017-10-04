import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AccordionModule, GrowlModule, MessagesModule, ButtonModule, TooltipModule } from 'primeng/primeng';
import { ApprouterModule } from './approuter.module';
import * as moment from 'moment';
/** Core Modules/Components/etc..  **/

import { AppComponent } from './app.component';
import { NavComponent } from './sdk/core/nav/nav.component';

import { PageNotFoundComponent } from './sdk/core/pagenotfound/pagenotfound.component';
import { AlertComponent } from './sdk/core/alert/alert.component';
import { SideNavComponent } from './sdk/core/sidenav/sidenav.component';
import { SidenavItemComponent } from './sdk/core/sidenav/sidenav-item/sidenav-item.component';


import { AlertService } from './sdk/core/shared/services/alert.service';
import { NavigationService } from './sdk/core/shared/services/navigation.service';
import { GlobalNavigationService } from './sdk/core/shared/services/globalNavigation.service';

/** App specific Components/modules/etc.. **/
import { DeactivateGuard } from './sdk/shared/guards/deactivate.guard';
import { NavItemComponent } from './sdk/core/nav/nav-item/nav-item.component';
import { HomeComponent } from './sdk/shared/home/home.component';

import * as _model from './contractaudit/shared/models/models';
import { Role } from './sdk/core/shared/models/role.model';
import { IUser } from './sdk/core/shared/models/iuser.model';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavItemComponent,
    HomeComponent,
    PageNotFoundComponent,
    AlertComponent,
    SideNavComponent,
    SidenavItemComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ApprouterModule,
    MessagesModule,
    GrowlModule,
    AccordionModule,
    ButtonModule,
    TooltipModule
  ],
  providers: [
    DeactivateGuard,
    AlertService,
    NavigationService,
    GlobalNavigationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
