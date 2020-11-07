import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  public isOrange = false;
  public complexObject: {text: string};

  constructor() { }

  ngOnInit() {
  }

  addText() {
    this.complexObject = {text: 'skomplikowany tekst'};
  }
}
