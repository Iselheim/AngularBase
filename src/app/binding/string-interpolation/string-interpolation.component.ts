import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {

  public text: string;

  public text2 = 'napis2';

  public textTimeout: string;

  public textChanged: string;

  constructor() {
    this.text = 'napis';
    setTimeout(()=> {
      this.textTimeout = 'textTimeout';
    }, 1000);
    let index = 0;
    setInterval(() => {
      index++;
      this.textChanged = `textChanged ${index}`;
    }, 3000);
  }

  public getText(): string {
    return 'text from method';
  }

}
