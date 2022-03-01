import { TestBed } from '@angular/core/testing';

import { ApiflixService } from './apiflix.service';

describe('ApiflixService', () => {
  let service: ApiflixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiflixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
