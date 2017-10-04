import { Component, Input } from '@angular/core';
import * as _model from '../../shared/model/models';


@Component({
    selector: 'app-studyguide-bar',
    templateUrl: './studyguide-bar.component.html'
})
export class StudyGuideBarComponent { 
    @Input() studyguide: _model.TestViewModel = <_model.TestViewModel>{};
}// UserBarComponent
