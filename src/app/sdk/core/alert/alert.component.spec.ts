import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowlModule } from 'primeng/primeng';

import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Message } from 'primeng/primeng';

import { AlertComponent } from './alert.component';
import { AlertService } from '../shared/services/alert.service';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    const subject =  new Subject<Message>();
    const alertServiceStub = {
      listen: function() {
        return Observable.of(subject);
      }
    };


    TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      providers : [
        { provide: AlertService, useValue: alertServiceStub}
      ],
      imports : [
        GrowlModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
