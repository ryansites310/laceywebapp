import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { Navigation  } from '../../shared/models/navigation.model';
import { NavItemComponent } from '../../nav/nav-item/nav-item.component';
import { SidenavItemComponent } from './sidenav-item.component';

import { Link } from '../../shared/models/link.model';
import { IUser } from '../../shared/models/iuser.model';
import * as moment from 'moment';

describe('SidenavItemComponent', () => {
  let component: SidenavItemComponent;
  let fixture: ComponentFixture<SidenavItemComponent>;
  //const studyguide: IUser = ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavItemComponent, NavItemComponent ],
      imports: [RouterTestingModule],
      providers: [ MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('+ should call childToggle()', () => {
    function stopPropagation() { return ''; };
    const mockEvent = { stopPropagation };
    spyOn(component, 'childToggle').and.callThrough();
    component.childToggle(mockEvent);
    expect(component.childToggle).toHaveBeenCalled();
  });

  it('+ should call toggle()', () => {
    const mockEvent = { };
    const mockVal = { };
    component.link = new Link();
    spyOn(component, 'toggle').and.callThrough();
    component.toggle(mockEvent, mockVal);
    expect(component.toggle).toHaveBeenCalled();
  });

  it('+ should call setVisibility with roles set to all', () => {
    spyOn(component, 'setVisibility').and.callThrough();
    const link = new Link();
    link.protected = true;
    const roles = [ 'all' ];
    link.roles = roles;
    const now = moment();

    component.setVisibility({
      firstName: 'ccat',
      lastName: 'studyguide',
      userName: 'userName',
      roles: [
          { name: 'Contract Maintenance User', description: '' },
        ],
      email: 'hmutpo@optum.com',
      token: 'AFDSFDjakljnNFKDL:LKJAF',
      expires: new Date(now.add(30, 'minutes').toLocaleString()),
      rowId: 0
      }, link);
    expect(component.setVisibility).toHaveBeenCalled();
  });

  it('+ should call setVisibility with roles not set to all', () => {
    spyOn(component, 'setVisibility').and.callThrough();
    const link = new Link();
    link.protected = true;
    const roles = [ 'not all' ];
    link.roles = roles;
    const now = moment();
    component.setVisibility({
      firstName: 'ccat',
      lastName: 'studyguide',
      userName: 'userName',
      roles: [
          { name: 'Contract Maintenance User', description: '' },
        ],
      email: 'hmutpo@optum.com',
      token: 'AFDSFDjakljnNFKDL:LKJAF',
      expires: new Date(now.add(30, 'minutes').toLocaleString()),
      rowId: 0
      }, link);
    expect(component.setVisibility).toHaveBeenCalled();
  });

});
