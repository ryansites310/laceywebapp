import { Injectable } from '@angular/core';

import { Alert } from '../models/alert';

import { MessageType } from '../models/messageType.model';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Message } from 'primeng/primeng';

@Injectable()
export class AlertService {
  private subject = new Subject<Message>();

  constructor() { }

  listen() {
    return this.subject.asObservable();
  }


  private broadcast(severity: string, summary: string, detail: string) {
    this.subject.next({severity: severity, summary: summary, detail: detail});
  };

 showSuccess(summary: string, detail: string) {
    this.broadcast('success', summary, detail);
 }

 showInfo(summary: string, detail: string) {
    this.broadcast('info', summary, detail);
 }

  showWarning(summary: string, detail: string) {
    this.broadcast('warning', summary, detail);
 }

  showError(summary: string, detail: string) {
    this.broadcast('error', summary, detail);
 }

}
