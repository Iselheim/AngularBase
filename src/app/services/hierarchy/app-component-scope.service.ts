import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppComponentScopeService {

  public value = 0;

  constructor() { }

  public addOne(): void {
    this.value++;
  }
}
