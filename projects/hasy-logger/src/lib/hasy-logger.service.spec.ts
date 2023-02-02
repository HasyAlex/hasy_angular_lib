import { TestBed } from '@angular/core/testing';

import { HasyLoggerService } from './hasy-logger.service';

describe('HasyLoggerService', () => {
  let service: HasyLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HasyLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
