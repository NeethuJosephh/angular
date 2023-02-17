import { TestBed } from '@angular/core/testing';

import { FeroService } from './fero.service';

describe('FeroService', () => {
  let service: FeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
