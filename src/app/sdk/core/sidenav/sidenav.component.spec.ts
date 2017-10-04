import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { SideNavComponent } from './sidenav.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { NavItemComponent } from '../nav/nav-item/nav-item.component';
import { Link } from '../shared/models/link.model';

import { NavigationService } from '../shared/services/navigation.service';


describe('SidenavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavComponent, SidenavItemComponent, NavItemComponent ],
      imports: [ RouterTestingModule ],
      providers: [ NavigationService, 
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

it('+ should call toggle()', () => {
      function preventDefault() { return ''; };
      const mockEvent = { preventDefault };
      spyOn(component, 'toggle').and.callThrough();
      component.toggle(mockEvent);
      expect(component.toggle).toHaveBeenCalled();
  });

});
