import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuidadPedagogicaComponent } from './continuidad-pedagogica.component';

describe('ContinuidadPedagogicaComponent', () => {
  let component: ContinuidadPedagogicaComponent;
  let fixture: ComponentFixture<ContinuidadPedagogicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuidadPedagogicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuidadPedagogicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
