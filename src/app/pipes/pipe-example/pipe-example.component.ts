import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  public text = 'Aleksander';

  public date = new Date();
  _2 = '2';

  constructor() { }

  ngOnInit() {
  }

}
