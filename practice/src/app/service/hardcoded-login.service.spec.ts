import { TestBed } from '@angular/core/testing';

import { HardcodedLoginService } from './hardcoded-login.service';

describe('HardcodedLoginService', () => {
  let service: HardcodedLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
