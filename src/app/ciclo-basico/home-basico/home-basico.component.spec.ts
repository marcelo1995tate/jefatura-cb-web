import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBasicoComponent } from './home-basico.component';

describe('HomeBasicoComponent', () => {
  let component: HomeBasicoComponent;
  let fixture: ComponentFixture<HomeBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBasicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
