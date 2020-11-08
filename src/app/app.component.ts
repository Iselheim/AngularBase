import { Component } from '@angular/core';
import {AppComponentScopeService} from './services/hierarchy/app-component-scope.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppComponentScopeService]
})
export class AppComponent {
  title = 'training-app';
}
