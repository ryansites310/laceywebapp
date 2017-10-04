import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import * as _ from 'lodash';

import { IUser } from './sdk/core/shared/models/iuser.model';
import { Subscription } from 'rxjs/Subscription';
import { NavigationService } from './sdk/core/shared/services/navigation.service';
import { GlobalNavigationService } from './sdk/core/shared/services/globalNavigation.service';
import { Navigation } from './sdk/core/shared/models/navigation.model';
import { Link } from 'app/sdk/core/shared/models/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  showSideNav = true;
  sideNavSubscription: Subscription;

  public userLinkActive = false;
  navigation: Navigation;
  year: number = new Date().getFullYear();
  sideNavEnabled: boolean;

  sideNavToggled(event) {
    this.showSideNav = !this.showSideNav;
  }

  constructor(private navigationService: NavigationService, private router: Router) {
    // Clone deep as multiple items are watching same navigation object.
    this.navigation = _.cloneDeep(this.navigationService.navigation);
    this.year = new Date().getFullYear();   
  }

  ngOnInit() {   
  }

  reset() {  }

  itemClicked(link: any) {
    this.parseLinks(this.navigation.links, link);
  }

  // TODO: Create Service That manages all navigations
  // We have 3 navs.. Global, side, mobile....
  parseLinks(links: Link[], link: Link) {
    links.map(lnk => {
      if (lnk.label !== link.label) {
        lnk.show = false;
      };
      if (lnk.children !== undefined && lnk.children.length > 0) {
        this.parseLinks(lnk.children, link);
      };
    });
  }

}
