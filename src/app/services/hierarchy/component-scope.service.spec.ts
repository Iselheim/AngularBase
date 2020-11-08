import { TestBed } from '@angular/core/testing';

import { ComponentScopeService } from './component-scope.service';

describe('ComponentScopeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentScopeService = TestBed.get(ComponentScopeService);
    expect(service).toBeTruthy();
  });
});
