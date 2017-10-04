import { Component, Input } from '@angular/core';
import * as _model from '../../shared/model/models';


@Component({
    selector: 'app-user-bar',
    templateUrl: './user-bar.component.html'
})
export class UserBarComponent { 
    @Input() user: _model.TestViewModel = <_model.TestViewModel>{};
}// UserBarComponent
