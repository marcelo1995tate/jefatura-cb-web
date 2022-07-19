import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioConstruccionComponent } from './sitio-construccion.component';

describe('SitioConstruccionComponent', () => {
  let component: SitioConstruccionComponent;
  let fixture: ComponentFixture<SitioConstruccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitioConstruccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioConstruccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
