import { TestBed } from '@angular/core/testing';

import { DankerServiceService } from './danker-service.service';

describe('DankerServiceService', () => {
  let service: DankerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DankerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
