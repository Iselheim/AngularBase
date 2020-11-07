import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  public isGreen = false;

  constructor() { }

  ngOnInit() {
  }

  getPinkColor(): string {
    return 'pink'
  }

  getGreenbackGround() {
    return {backgroundColor: 'green'};
  }

  getBlackBackgroundWithBorder() {
    return {backgroundColor: 'black', border: 'solid orange 10px', color: 'white'};
  }
}
