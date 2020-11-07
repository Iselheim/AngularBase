import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  @Output() public voiceEvent = new EventEmitter<string>();

  @Input() public name: string;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.voiceEvent.emit(`Mew from ` + this.name);
  }
}
