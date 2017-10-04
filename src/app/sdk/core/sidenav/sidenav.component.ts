import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/services/navigation.service';
import { Navigation } from '../shared/models/navigation.model';
import { Link } from '../shared/models/link.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {
  enableSideNav = true;
  visible = true;
  navigation: Navigation;

  constructor(private navigationService: NavigationService) {
    this.navigation = navigationService.navigation;
  }

  ngOnInit() {

    this.visible = localStorage.getItem('sideNavExtended') === 'true';
  }

  toggle(event) {
    this.visible = !this.visible;
    localStorage.setItem('sideNavExtended', String(this.visible));
    event.preventDefault();
  }
}
