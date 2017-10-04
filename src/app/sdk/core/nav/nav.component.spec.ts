import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';

import { GlobalNavigationService } from '../shared/services/globalNavigation.service';

import { Link } from '../shared/models/link.model';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let link: Link;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent, NavItemComponent ],
      providers : [ GlobalNavigationService, MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        } ],
        imports: [ RouterTestingModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('+ should call mobileNavItemClicked()', () => {
      spyOn(component, 'mobileNavItemClicked').and.callThrough();
      component.mobileNavItemClicked();
      expect(component.mobileNavItemClicked).toHaveBeenCalled();
  });

  it('+ should call globalItemClicked()', () => {
      link = { label: '?', icon: '', url: '', children: [], tooltip: '', show: false, protected: false, roles: []};
      spyOn(component, 'globalItemClicked').and.callThrough();
      component.globalItemClicked(link);
      expect(component.globalItemClicked).toHaveBeenCalled();
  });

});
