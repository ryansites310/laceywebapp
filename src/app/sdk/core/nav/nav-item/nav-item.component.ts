import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '../../shared/models/link.model';
import { IUser } from '../../shared/models/iuser.model';
import { Subscription } from 'rxjs/Subscription';
import * as $ from 'jquery';


@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  subscription: Subscription;
  public currentUser: IUser;
  @Input() link: Link;
  @Input() sideNavExpanded: boolean;
  @Input() isSideNav = false;
  @Input() isMobileNav = false;
  public visibleByRole: boolean;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() childClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() mobileNavItemClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  
  }


  ngOnInit() {
   
    this.setVisibility(this.currentUser, this.link);
  }

  toggleParent() {
    if (!this.isSideNav) {
      this.link.show = false;
    }
  }

  childMobileNavItemClicked() {
    if (this.mobileNavItemClicked !== undefined) {
      this.mobileNavItemClicked.next(null);
    }
  }

  toggle(event, val) {
    this.link.show = !this.link.show;
    if (this.link.children === undefined || this.link.children.length === 0) {
      this.childClicked.next(null);
      if (this.isMobileNav && this.mobileNavItemClicked !== undefined) {
        this.mobileNavItemClicked.next(null);
      }
    }
    let link = this.link;
    this.itemClicked.emit(link);
    event.stopPropagation();

  }

  setVisibility(studyguide: IUser, link: Link) {
    this.visibleByRole = false;
    if (link === undefined) {
      return;
    }
    if (!link.protected) {
      this.visibleByRole = true;
    } else if (link.protected && link.roles && studyguide) {
      if (link.roles[0] === 'all') {
        this.visibleByRole = true;
      } else {
        let hasRole = false;
        studyguide.roles.map(role => {
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
