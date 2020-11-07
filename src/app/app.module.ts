import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './binding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './binding/property-binding/property-binding.component';
import { EventBindingComponent } from './binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './binding/two-way-binding/two-way-binding.component';
import {FormsModule} from '@angular/forms';
import { NgIfComponent } from './build-in-directives/ng-if/ng-if.component';
import { NgForComponent } from './build-in-directives/ng-for/ng-for.component';
import { NgIfElseComponent } from './build-in-directives/ng-if-else/ng-if-else.component';
import { NgStyleComponent } from './build-in-directives/ng-style/ng-style.component';
import { NgClassComponent } from './build-in-directives/ng-class/ng-class.component';
import { UsersComponent } from './communication/input/users/users.component';
import { UserComponent } from './communication/input/users/user/user.component';
import { ZooComponent } from './communication/output/zoo/zoo.component';
import { CatComponent } from './communication/output/zoo/cat/cat.component';
import { DogComponent } from './communication/output/zoo/dog/dog.component';
import { LocalReferenceComponent } from './local-reference/local-reference/local-reference.component';
import { ViewChildComponent } from './local-reference/view-child/view-child.component';
import { OnEventsComponent } from './on-events/on-events/on-events.component';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgForComponent,
    NgIfElseComponent,
    NgStyleComponent,
    NgClassComponent,
    UsersComponent,
    UserComponent,
    ZooComponent,
    CatComponent,
    DogComponent,
    LocalReferenceComponent,
    ViewChildComponent,
    OnEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
