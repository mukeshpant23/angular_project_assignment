import { Component, OnInit, Output } from '@angular/core';
import { EmmiterServiceService } from '../../common_services/emmiter-service.service';

@Component({
  selector: 'app-increament',
  templateUrl: './increament.component.html',
  styleUrls: ['./increament.component.css']
})
export class IncreamentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  increament() {
    EmmiterServiceService.get('counter').emit('+');
  }
}
