import { Injectable } from '@angular/core';
import { globalNavigation } from '../../../shared/models/globalNavigation';
import { Navigation } from '../models/navigation.model';


@Injectable()
export class GlobalNavigationService {

  navigation: Navigation;

  constructor() {
   this.navigation = globalNavigation;
  }

}
