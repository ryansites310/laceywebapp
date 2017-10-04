import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './sdk/core/nav/nav.component';

import { SideNavComponent  } from './sdk/core/sidenav/sidenav.component';

import { AlertComponent } from './sdk/core/alert/alert.component';
import { HomeComponent } from './sdk/shared/home/home.component';
import { SidenavItemComponent } from './sdk/core/sidenav/sidenav-item/sidenav-item.component';
import { NavItemComponent } from './sdk/core/nav/nav-item/nav-item.component';

import { RouterTestingModule } from '@angular/router/testing';
import { GrowlModule } from 'primeng/primeng';


import { AlertService } from './sdk/core/shared/services/alert.service';
import { NavigationService } from './sdk/core/shared/services/navigation.service';
import { GlobalNavigationService } from './sdk/core/shared/services/globalNavigation.service';

import { Link } from './sdk/core/shared/models/link.model';


describe('AppComponent', () => {
    let link: Link;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        NavItemComponent,
        SideNavComponent,
        AlertComponent,
        HomeComponent,
        SidenavItemComponent
      ],
      imports : [
        RouterTestingModule.withRoutes(
          [ { path: '', component : HomeComponent}]
        ),
        GrowlModule,
        FormsModule
      ],
      providers : [
        AlertService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        NavigationService,
        GlobalNavigationService
      ]
    }).compileComponents();
  }));

   beforeEach(() => {
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('+ should call sideNavToggled()', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const component = fixture.debugElement.componentInstance;
        const mockEvent = { };
        spyOn(component, 'sideNavToggled').and.callThrough();
        component.sideNavToggled(mockEvent);
        expect(component.sideNavToggled).toHaveBeenCalled();
    });

     it('+ should call itemClicked()', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const component = fixture.debugElement.componentInstance;
        link = { label: '?', icon: '', url: '', children: [], tooltip: '', show: false, protected: false, roles: []};
        spyOn(component, 'itemClicked').and.callThrough();
        component.itemClicked(link);
        expect(component.itemClicked).toHaveBeenCalled();
  });

});
