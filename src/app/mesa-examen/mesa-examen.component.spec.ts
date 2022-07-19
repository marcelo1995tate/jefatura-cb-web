import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaExamenComponent } from './mesa-examen.component';

describe('MesaExamenComponent', () => {
  let component: MesaExamenComponent;
  let fixture: ComponentFixture<MesaExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaExamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
