import { TestBed } from '@angular/core/testing';

import { ApiRanksService } from './api-ranks.service';

describe('ApiRanksService', () => {
  let service: ApiRanksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRanksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
