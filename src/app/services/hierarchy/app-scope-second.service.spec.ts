import { TestBed } from '@angular/core/testing';

import { AppScopeSecondService } from './app-scope-second.service';

describe('AppScopeSecondService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppScopeSecondService = TestBed.get(AppScopeSecondService);
    expect(service).toBeTruthy();
  });
});
