import { TestBed } from '@angular/core/testing';

import { ServerserviceService } from './serverservice.service';

describe('ServerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerserviceService = TestBed.get(ServerserviceService);
    expect(service).toBeTruthy();
  });
});
