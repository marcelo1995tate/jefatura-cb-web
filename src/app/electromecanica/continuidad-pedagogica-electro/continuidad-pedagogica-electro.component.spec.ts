import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuidadPedagogicaElectroComponent } from './continuidad-pedagogica-electro.component';

describe('ContinuidadPedagogicaElectroComponent', () => {
  let component: ContinuidadPedagogicaElectroComponent;
  let fixture: ComponentFixture<ContinuidadPedagogicaElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuidadPedagogicaElectroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuidadPedagogicaElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
