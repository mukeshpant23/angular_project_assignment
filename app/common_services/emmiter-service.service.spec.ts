import { TestBed, inject } from '@angular/core/testing';

import { EmmiterServiceService } from './emmiter-service.service';

describe('EmmiterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmmiterServiceService]
    });
  });

  it('should be created', inject([EmmiterServiceService], (service: EmmiterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
