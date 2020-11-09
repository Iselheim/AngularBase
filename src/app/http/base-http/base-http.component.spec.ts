import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseHttpComponent } from './base-http.component';

describe('BaseHttpComponent', () => {
  let component: BaseHttpComponent;
  let fixture: ComponentFixture<BaseHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
