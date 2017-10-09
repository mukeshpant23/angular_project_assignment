import { Component, OnInit } from '@angular/core';
import { EmmiterServiceService } from "../../common_services/emmiter-service.service";

@Component({
  selector: 'app-decreament',
  templateUrl: './decreament.component.html',
  styleUrls: ['./decreament.component.css']
})
export class DecreamentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  decreament() {
    EmmiterServiceService.get('counter').emit('-');
  }
}
