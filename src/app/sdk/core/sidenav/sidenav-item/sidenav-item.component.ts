import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../../shared/models/link.model';
import { IUser } from '../../shared/models/iuser.model';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';



@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {

  subscription: Subscription;
  public currentUser: IUser;
  @Input() link: Link;
  @Input() sideNavExpanded: boolean;
  public visibleByRole: boolean;

  constructor() {
  
   }


  ngOnInit() {    
      this.setVisibility(this.currentUser, this.link);
  }

  childToggle(event) {
    event.stopPropagation();
  }

  toggle(event, val) {
    this.link.show = !this.link.show;
  }

  setVisibility(user: IUser, link: Link) {
    this.visibleByRole = false;
    if (link === undefined) {
      return;
    }
    if (!link.protected) {
      this.visibleByRole = true;
    } else if (link.protected && link.roles && user) {
      if (link.roles[0] === 'all') {
        this.visibleByRole = true;
      } else {
        let hasRole = false;
        user.roles.map(role => {
          link.roles.map(linkRole => {
            if (role.name === linkRole) {
              hasRole = true;
            };
          });
        });
        this.visibleByRole = hasRole;
      }
    }
  }
}
