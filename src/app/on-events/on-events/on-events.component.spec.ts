import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnEventsComponent } from './on-events.component';

describe('OnEventsComponent', () => {
  let component: OnEventsComponent;
  let fixture: ComponentFixture<OnEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
