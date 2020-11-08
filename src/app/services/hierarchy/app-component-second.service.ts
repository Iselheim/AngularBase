import { Injectable } from '@angular/core';
import {AppComponentScopeService} from './app-component-scope.service';

@Injectable({
  providedIn: 'root'
})
export class AppComponentSecondService {

  constructor(public appComponentScope: AppComponentScopeService) { }
}
