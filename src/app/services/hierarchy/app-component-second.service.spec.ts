import { TestBed } from '@angular/core/testing';

import { AppComponentSecondService } from './app-component-second.service';

describe('AppComponentSecondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppComponentSecondService = TestBed.get(AppComponentSecondService);
    expect(service).toBeTruthy();
  });
});
