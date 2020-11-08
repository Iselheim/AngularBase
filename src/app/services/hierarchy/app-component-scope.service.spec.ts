import { TestBed } from '@angular/core/testing';

import { AppComponentScopeService } from './app-component-scope.service';

describe('AppComponentScopeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppComponentScopeService = TestBed.get(AppComponentScopeService);
    expect(service).toBeTruthy();
  });
});
