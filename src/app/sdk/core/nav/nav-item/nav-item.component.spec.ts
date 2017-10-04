import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Link } from '../../shared/models/link.model';
import { NavItemComponent } from './nav-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { AuthService } from '../../../shared/services/auth.service';

describe('NavItemComponent', () => {
  let component: NavItemComponent;
  let fixture: ComponentFixture<NavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemComponent ],
      imports: [ RouterTestingModule, HttpModule ],
      providers: [ AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('- should call childMobileNavItemClicked()', () => {
      spyOn(component, 'childMobileNavItemClicked').and.callThrough();
      component.childMobileNavItemClicked();
      expect(component.childMobileNavItemClicked).toHaveBeenCalled();
  });

  it('+ should call toggle()', () => {
    function stopPropagation() { return ''; };
    const mockEvent = { stopPropagation };
    const mockVal = { };
    component.link = new Link();
    spyOn(component, 'toggle').and.callThrough();
    component.toggle(mockEvent, mockVal);
    expect(component.toggle).toHaveBeenCalled();
  });

  it('- should call toggleParent()', () => {
    component.isSideNav = false;
    component.link = new Link();
    spyOn(component, 'toggleParent').and.callThrough();
    component.toggleParent();
    expect(component.toggleParent).toHaveBeenCalled();
  });

  it('+ should call setVisibility with roles set to all', () => {
    spyOn(component, 'setVisibility').and.callThrough();
    const link = new Link();
    link.protected = true;
    const roles = [ 'all' ];
    link.roles = roles;
    component.setVisibility({
      firstName: 'ccat',
      lastName: 'user',
      userName: 'userName',
      roles: [
          { name: 'Contract Maintenance User', description: '' },
        ],
      email: 'hmutpo@optum.com',
      token: 'AFDSFDjakljnNFKDL:LKJAF',
      expires: new Date(),
      rowId: 1
      }, link);
    expect(component.setVisibility).toHaveBeenCalled();
  });

  it('+ should call setVisibility with roles not set to all', () => {
    spyOn(component, 'setVisibility').and.callThrough();
    const link = new Link();
    link.protected = true;
    const roles = [ 'not all' ];
    link.roles = roles;
    component.setVisibility({
      firstName: 'ccat',
      lastName: 'user',
      userName: 'userName',
      roles: [
          { name: 'Contract Maintenance User', description: '' },
        ],
      email: 'hmutpo@optum.com',
      token: 'AFDSFDjakljnNFKDL:LKJAF',
      expires: new Date(),
      rowId: 1
      }, link);
    expect(component.setVisibility).toHaveBeenCalled();
  });

});
