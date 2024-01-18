import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosElectroComponent } from './planos-electro.component';

describe('PlanosElectroComponent', () => {
  let component: PlanosElectroComponent;
  let fixture: ComponentFixture<PlanosElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanosElectroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
