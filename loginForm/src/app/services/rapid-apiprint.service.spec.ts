import { TestBed } from '@angular/core/testing';

import { RapidAPIPrintService } from './rapid-apiprint.service';

describe('RapidAPIPrintService', () => {
  let service: RapidAPIPrintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RapidAPIPrintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
