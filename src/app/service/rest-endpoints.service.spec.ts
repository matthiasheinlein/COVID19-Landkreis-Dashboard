import { TestBed } from '@angular/core/testing';

import { RestEndpointsService } from './rest-endpoints.service';

describe('RestEndpointsService', () => {
  let service: RestEndpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestEndpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
