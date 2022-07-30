import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorasCarrouselComponent } from './mejoras-carrousel.component';

describe('MejorasCarrouselComponent', () => {
  let component: MejorasCarrouselComponent;
  let fixture: ComponentFixture<MejorasCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejorasCarrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MejorasCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
