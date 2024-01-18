import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenElectroComponent } from './examen-electro.component';

describe('ExamenElectroComponent', () => {
  let component: ExamenElectroComponent;
  let fixture: ComponentFixture<ExamenElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenElectroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
