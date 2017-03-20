import { TestBed, inject } from '@angular/core/testing';

import { PhoneServiceService } from './phone-service.service';

describe('PhoneServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneServiceService]
    });
  });

  it('should ...', inject([PhoneServiceService], (service: PhoneServiceService) => {
    expect(service).toBeTruthy();
  }));
});
