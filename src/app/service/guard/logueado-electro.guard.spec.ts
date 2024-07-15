import { TestBed } from '@angular/core/testing';

import { LogueadoElectroGuard } from './logueado-electro.guard';

describe('LogueadoElectroGuard', () => {
  let guard: LogueadoElectroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogueadoElectroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
