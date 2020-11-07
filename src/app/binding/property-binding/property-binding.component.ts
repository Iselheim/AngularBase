import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public disabled = true;

  public disabled2 = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.disabled2 = false;
    }, 3000);
  }

  public getDisabled(): boolean {
    return false;
  }

}
