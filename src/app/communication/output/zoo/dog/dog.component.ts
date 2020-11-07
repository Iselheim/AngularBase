import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  @Output() public voiceEvent = new EventEmitter<string>();

  // @Output('customName') public voiceEvent = new EventEmitter<string>();

  @Input() public name: string;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.voiceEvent.emit("Bark from " + this.name);
  }
}
