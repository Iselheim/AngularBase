import { Injectable } from '@angular/core';
import {AppScopeService} from './app-scope.service';

@Injectable({
  providedIn: 'root'
})
export class AppScopeSecondService {

  constructor(public appScope: AppScopeService) { }
}
