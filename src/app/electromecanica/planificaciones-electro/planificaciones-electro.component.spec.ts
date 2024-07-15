import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificacionesElectroComponent } from './planificaciones-electro.component';

describe('PlanificacionesElectroComponent', () => {
  let component: PlanificacionesElectroComponent;
  let fixture: ComponentFixture<PlanificacionesElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanificacionesElectroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificacionesElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
