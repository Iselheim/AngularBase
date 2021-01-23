import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  public carName: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    // let param = this.router.snapshot.params['name'];
    // this.carName = param;

    this.router.params.subscribe((params:Params) => {
      this.carName = params['name'];
    })
  }

}
