import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {

  public dogs = ['Burek', 'Azor', 'Reksio'];

  public cats = ['Mruczek', 'Bonifacy'];

  public voice: string;

  constructor() { }

  ngOnInit() {
  }

  onVoice(event: string) {
    this.voice = event;
  }
}
