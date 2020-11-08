import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  @Input() name: string;

  @Output() nameEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onNameSet($event: string) {
    this.nameEvent.emit($event);
  }
}
