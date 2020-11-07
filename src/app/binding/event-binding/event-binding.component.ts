import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public array: string[] = [];

  public text: string;

  constructor() { }

  ngOnInit() {
  }

  public onClick() {
    this.array.push('Text');
  }

  onInput(event: Event) {
    this.text = (<HTMLInputElement>event.target).value;
  }
}
