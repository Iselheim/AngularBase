import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  // @ViewChild('inputName',{static: false}) inputName: ElementRef;

  @ViewChild('inputName',{static: true}) inputName: ElementRef;

  public name: string;

  constructor() { }

  ngOnInit() {
    console.log('From onInit inputName', this.inputName);
    console.log('From onInit inputName.nativeElement', this.inputName.nativeElement);
  }

  print() {
    console.log('inputName', this.inputName);
    console.log('inputName.nativeElement', this.inputName.nativeElement);
    this.name = this.inputName.nativeElement.value.toLocaleUpperCase();
  }
}
