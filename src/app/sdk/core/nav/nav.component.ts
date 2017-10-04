import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { IUser } from '../shared/models/iuser.model';
import { Subscription } from 'rxjs/Subscription';
import { GlobalNavigationService } from '../shared/services/globalNavigation.service';
import { Navigation } from '../shared/models/navigation.model';
import { Link } from 'app/sdk/core/shared/models/link.model';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy  {

  public currentUser: IUser;
  public userLinkActive = false;
  navigation: Navigation;

  // @Output() sideNavToggledEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private navigationService: GlobalNavigationService) {
    this.navigation = navigationService.navigation;   
  }

  ngOnInit() {
   
   }

  ngOnDestroy() {
  }

  toggle(element) {
    this.userLinkActive = !this.userLinkActive;
  }

  toggleSideNav() {
    //this.sideNavToggledEvent.next({});
  }

  mobileNavItemClicked() {
    const navBar = document.getElementById('navbar');
    navBar.className = 'navbar-collapse collapse';
  }

  globalItemClicked(link: Link) {
      this.parseLinks(this.navigation.links, link);
  }

   parseLinks(links: Link[], link: Link) {
      links.map(lnk => {
        if (lnk.label !== link.label) {
          lnk.show = false;
        };
        if (lnk.children !== undefined && lnk.children != null && lnk.children.length > 0) {
          this.parseLinks(lnk.children, link);
        };
      });
   }

}
