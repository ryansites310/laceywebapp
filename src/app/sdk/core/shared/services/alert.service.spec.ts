import { TestBed, inject, async  } from '@angular/core/testing';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';

import { Message } from 'primeng/primeng';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService]
    });
  });

  it('should ...', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));

  it('should call showSuccess', async(inject([AlertService], (service: AlertService) => {

    expect(service).toBeTruthy();

    service.listen().subscribe(x => {
      expect(x.severity).toEqual('success');
      expect(x.summary).toEqual('Success Summary');
      expect(x.detail).toEqual('Success Detail');
    },
    e => console.log('onError: ' + e.message),
    () => console.log('onCompletion: '));

    service.showSuccess('Success Summary', 'Success Detail');
  })));

  it('should call showInfo', async(inject([AlertService], (service: AlertService) => {

    expect(service).toBeTruthy();

    service.listen().subscribe(x => {
      expect(x.severity).toEqual('info');
      expect(x.summary).toEqual('Info Summary');
      expect(x.detail).toEqual('Info Detail');
    },
    e => console.log('onError: ' + e.message),
    () => console.log('onCompletion: '));

    service.showInfo('Info Summary', 'Info Detail');
  })));

  it('should call showWarning', async(inject([AlertService], (service: AlertService) => {

    expect(service).toBeTruthy();

    service.listen().subscribe(x => {
      expect(x.severity).toEqual('warning');
      expect(x.summary).toEqual('Warning Summary');
      expect(x.detail).toEqual('Warning Detail');
    },
    e => console.log('onError: ' + e.message),
    () => console.log('onCompletion: '));

    service.showWarning('Warning Summary', 'Warning Detail');
  })));

  it('should call showError', async(inject([AlertService], (service: AlertService) => {

    expect(service).toBeTruthy();

    service.listen().subscribe(x => {
      expect(x.severity).toEqual('error');
      expect(x.summary).toEqual('Error Summary');
      expect(x.detail).toEqual('Error Detail');
    },
    e => console.log('onError: ' + e.message),
    () => console.log('onCompletion: '));

    service.showError('Error Summary', 'Error Detail');
  })));

});
