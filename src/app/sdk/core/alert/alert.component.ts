import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { AlertService } from '../shared/services/alert.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  msgs: Message[] = [];

  constructor(private service: AlertService) { }

  ngOnInit() {
    this.service.listen().subscribe(alert => {
      this.msgs = [];
      this.msgs.push(alert);
    });
  }

  show(message: Message) {
    this.msgs = [];
    this.msgs.push(message);
  }
}
