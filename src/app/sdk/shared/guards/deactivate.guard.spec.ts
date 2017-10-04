import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DeactivateGuard } from './deactivate.guard';
import { CanDeactivate } from '@angular/router';

@Component({
  template: ''
})
class DummyComponent {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

describe('DeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DeactivateGuard
      ],
      declarations: [DummyComponent]
    }).compileComponents();
  });

  // it('should ...', inject([DeactivateGuard], (guard: DeactivateGuard) => {
  //   expect(guard).toBeTruthy();
  // }));

  // it('+ should not allow user to overcome the guard for whatever reasons', inject([DeactivateGuard], (guard: DeactivateGuard) => {
  //   expect(guard.canDeactivate(new DummyComponent())).toBe(true);
  // }));
});
