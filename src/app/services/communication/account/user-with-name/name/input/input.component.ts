import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountService} from '../../../account.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() value: string;

  @Output() valueEvent = new EventEmitter<string>();

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  fireEvent(event: Event) {
    this.valueEvent.emit((<HTMLInputElement>event.target).value);
    this.accountService.account = this.value;
  }
}
