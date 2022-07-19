import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInfoGeneralComponent } from './banner-info-general.component';

describe('BannerInfoGeneralComponent', () => {
  let component: BannerInfoGeneralComponent;
  let fixture: ComponentFixture<BannerInfoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerInfoGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInfoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
