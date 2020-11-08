import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StringInterpolationComponent} from './binding/string-interpolation/string-interpolation.component';
import {PropertyBindingComponent} from './binding/property-binding/property-binding.component';
import {EventBindingComponent} from './binding/event-binding/event-binding.component';
import {TwoWayBindingComponent} from './binding/two-way-binding/two-way-binding.component';
import {FormsModule} from '@angular/forms';
import {NgIfComponent} from './build-in-directives/ng-if/ng-if.component';
import {NgForComponent} from './build-in-directives/ng-for/ng-for.component';
import {NgIfElseComponent} from './build-in-directives/ng-if-else/ng-if-else.component';
import {NgStyleComponent} from './build-in-directives/ng-style/ng-style.component';
import {NgClassComponent} from './build-in-directives/ng-class/ng-class.component';
import {UsersComponent} from './communication/input/users/users.component';
import {UserComponent} from './communication/input/users/user/user.component';
import {ZooComponent} from './communication/output/zoo/zoo.component';
import {CatComponent} from './communication/output/zoo/cat/cat.component';
import {DogComponent} from './communication/output/zoo/dog/dog.component';
import {LocalReferenceComponent} from './local-reference/local-reference/local-reference.component';
import {ViewChildComponent} from './local-reference/view-child/view-child.component';
import {OnEventsComponent} from './on-events/on-events/on-events.component';
import {NgContentComponent} from './local-reference/ng-content/ng-content.component';
import {HeaderComponent} from './local-reference/ng-content/header/header.component';
import {FooterComponent} from './local-reference/ng-content/footer/footer.component';
import {HighlightDirective} from './directives/highlight.directive';
import {PingComponent} from './directives/ping/ping.component';
import {NgSwitchComponent} from './build-in-directives/ng-switch/ng-switch.component';
import {LoggingComponent} from './services/base/logging/logging.component';
import {ShowDataComponent} from './services/hierarchy/hierarchical/show-data/show-data.component';
import {HierarchicalComponent} from './services/hierarchy/hierarchical/hierarchical.component';
import {AccountComponent} from './services/communication/account/account.component';
import {NameComponent} from './services/communication/account/user-with-name/name/name.component';
import {InputComponent} from './services/communication/account/user-with-name/name/input/input.component';
import {UserWithNameComponent} from './services/communication/account/user-with-name/user-with-name.component';
import {RouterModule, Routes} from '@angular/router';
import {JavaComponent} from './routing/java/java.component';
import {PythonComponent} from './routing/python/python.component';
import { HomeComponent } from './routing/home/home.component';
import { CarComponent } from './routing/car/car.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'java', component: JavaComponent},
  {path: 'python', component: PythonComponent},
  {path: 'car/:name', component: CarComponent}
];


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
    OnEventsComponent,
    NgContentComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    PingComponent,
    NgSwitchComponent,
    LoggingComponent,
    ShowDataComponent,
    HierarchicalComponent,
    AccountComponent,
    NameComponent,
    InputComponent,
    UserComponent,
    UserWithNameComponent,
    JavaComponent,
    PythonComponent,
    HomeComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
