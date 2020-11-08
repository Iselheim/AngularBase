import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-with-name',
  templateUrl: './user-with-name.component.html',
  styleUrls: ['./user-with-name.component.css']
})
export class UserWithNameComponent implements OnInit {

  @Input() user: string;

  @Output() userEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onNameSet($event: string) {
    this.userEvent.emit($event);
  }

}
