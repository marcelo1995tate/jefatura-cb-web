import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeElectroComponent } from './home-electro.component';

describe('HomeElectroComponent', () => {
  let component: HomeElectroComponent;
  let fixture: ComponentFixture<HomeElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeElectroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
