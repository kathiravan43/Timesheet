/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LeaveApplicationService } from './LeaveApplication.service';

describe('Service: LeaveApplication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveApplicationService]
    });
  });

  it('should ...', inject([LeaveApplicationService], (service: LeaveApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
