import { Injectable } from '@angular/core';
import { navigation } from '../../../shared/models/navigation';
import { Navigation } from '../models/navigation.model';


@Injectable()
export class NavigationService {

  navigation: Navigation;

  constructor() {
   this.navigation = navigation;
  }

}
