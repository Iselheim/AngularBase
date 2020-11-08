import { Component, OnInit } from '@angular/core';
import {ComponentScope2Service} from '../component-scope.service';

@Component({
  selector: 'app-hierarchical',
  templateUrl: './hierarchical.component.html',
  styleUrls: ['./hierarchical.component.css'],
  // providers: [ComponentScope2Service]
})
export class HierarchicalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
