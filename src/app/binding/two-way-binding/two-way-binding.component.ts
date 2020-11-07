import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  public text: string = 'some value';

  constructor() { }

  ngOnInit() {
  }

  onInput(event: Event) {
    this.text = (<HTMLInputElement>event.target).value;
  }

}
