import { Component, OnInit } from '@angular/core';
import {BaseHttpService} from '../base-http.service';

@Component({
  selector: 'app-base-http',
  templateUrl: './base-http.component.html',
  styleUrls: ['./base-http.component.css']
})
export class BaseHttpComponent implements OnInit {

  public data: any = {};

  constructor(private baseHttp: BaseHttpService) { }

  ngOnInit() {
  }

  getDate() {
    this.baseHttp.getFakeData().subscribe(value => {
      this.data = value;
    })
  }

  getKeys(): string[] {
    return this.data.keys;
  }
}
