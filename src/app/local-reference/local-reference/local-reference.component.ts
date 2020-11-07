import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
export class LocalReferenceComponent implements OnInit {

  public name: string;

  constructor() { }

  ngOnInit() {
  }

  print(inputName: HTMLInputElement) {
    console.log(inputName);
    this.name = inputName.value.toLocaleUpperCase();
  }
}
