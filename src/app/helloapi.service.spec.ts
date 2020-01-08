import { TestBed } from '@angular/core/testing';

import { HelloapiService } from './helloapi.service';

describe('HelloapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloapiService = TestBed.get(HelloapiService);
    expect(service).toBeTruthy();
  });
});
