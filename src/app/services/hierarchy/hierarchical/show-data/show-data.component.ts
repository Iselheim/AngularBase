import {Component, OnInit} from '@angular/core';
import {ComponentScope2Service} from '../../component-scope.service';
import {AppComponentScopeService} from '../../app-component-scope.service';
import {AppScopeService} from '../../app-scope.service';
import {AppComponentSecondService} from '../../app-component-second.service';
import {AppScopeSecondService} from '../../app-scope-second.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css'],
  providers: [ComponentScope2Service]

})
export class ShowDataComponent implements OnInit {

  constructor(public componentScope: ComponentScope2Service,
              public appComponentScope: AppComponentScopeService,
              public appComponentSecondService: AppComponentSecondService,
              public appScope: AppScopeService,
              public appScopeSecondService: AppScopeSecondService) {
  }

  ngOnInit() {
  }

  addValueComponentScope() {
      this.componentScope.addOne();
  }

  addValueAppComponentScope() {
    this.appComponentScope.addOne();
  }

  addValueAppComponentScopeSecond() {
    this.appComponentSecondService.appComponentScope.addOne();
  }

  addValueAppScope() {
    this.appScope.addOne();
  }

  addValueAppScopeSecond() {
    this.appScopeSecondService.appScope.addOne();
  }
}
