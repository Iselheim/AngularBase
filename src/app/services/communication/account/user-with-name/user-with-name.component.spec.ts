import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithNameComponent } from './user-with-name.component';

describe('UserWithNameComponent', () => {
  let component: UserWithNameComponent;
  let fixture: ComponentFixture<UserWithNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWithNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWithNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
