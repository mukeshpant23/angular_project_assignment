import { Component, OnInit } from '@angular/core';
import { EmmiterServiceService } from "../../common_services/emmiter-service.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  count: number = 0;
  lastAction: string = 'None';
  emitter = EmmiterServiceService.get('counter'); // take the counter event
  constructor() {
    this.emitter.subscribe(event => {
      this.onCounterEvent(event);
    });
  }

  ngOnInit() {
  }
  onCounterEvent(a) {
    if (a === '+') {
      this.count++;
      this.lastAction = 'Increament';
    } else {
      this.count--;
      this.lastAction = 'Decreament';
    }
  }
}
