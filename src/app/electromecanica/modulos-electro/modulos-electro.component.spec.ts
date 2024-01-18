import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosElectroComponent } from './modulos-electro.component';

describe('ModulosElectroComponent', () => {
  let component: ModulosElectroComponent;
  let fixture: ComponentFixture<ModulosElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosElectroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
