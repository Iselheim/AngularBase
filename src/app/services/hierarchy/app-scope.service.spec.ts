import { TestBed } from '@angular/core/testing';

import { AppScopeService } from './app-scope.service';

describe('AppScopeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppScopeService = TestBed.get(AppScopeService);
    expect(service).toBeTruthy();
  });
});
