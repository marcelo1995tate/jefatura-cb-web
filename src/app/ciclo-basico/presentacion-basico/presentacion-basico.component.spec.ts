import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionBasicoComponent } from './presentacion-basico.component';

describe('PresentacionBasicoComponent', () => {
  let component: PresentacionBasicoComponent;
  let fixture: ComponentFixture<PresentacionBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionBasicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
