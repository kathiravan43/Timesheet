/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActiveHoursService } from './ActiveHours.service';

describe('Service: ActiveHours', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveHoursService]
    });
  });

  it('should ...', inject([ActiveHoursService], (service: ActiveHoursService) => {
    expect(service).toBeTruthy();
  }));
});
