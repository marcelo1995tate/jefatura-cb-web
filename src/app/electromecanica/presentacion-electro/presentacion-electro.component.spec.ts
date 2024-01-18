import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionElectroComponent } from './presentacion-electro.component';

describe('PresentacionElectroComponent', () => {
  let component: PresentacionElectroComponent;
  let fixture: ComponentFixture<PresentacionElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionElectroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
