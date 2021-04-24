import { TestBed } from '@angular/core/testing';

import { NonFunctionalService } from './non-functional.service';

describe('NonFunctionalService', () => {
  let service: NonFunctionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonFunctionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
