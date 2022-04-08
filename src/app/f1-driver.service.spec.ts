import { TestBed } from '@angular/core/testing';

import { F1DriverService } from './f1-driver.service';

describe('F1DriverService', () => {
  let service: F1DriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(F1DriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
