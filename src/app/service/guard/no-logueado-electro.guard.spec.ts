import { TestBed } from '@angular/core/testing';

import { NoLogueadoElectroGuard } from './no-logueado-electro.guard';

describe('NoLogueadoElectroGuard', () => {
  let guard: NoLogueadoElectroGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoLogueadoElectroGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
