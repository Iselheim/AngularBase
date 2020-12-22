import { Component, OnInit } from '@angular/core';
import {BaseHttpService} from '../base-http.service';
import {BaseJson} from '../base-json';

@Component({
  selector: 'app-base-http',
  templateUrl: './base-http.component.html',
  styleUrls: ['./base-http.component.css']
})
export class BaseHttpComponent implements OnInit {

  public data: BaseJson;

  constructor(private baseHttp: BaseHttpService) { }

  ngOnInit() {
  }

  getDate() {
    this.baseHttp.getFakeData().subscribe(value => {
      console.log(value);
    })
  }
}
