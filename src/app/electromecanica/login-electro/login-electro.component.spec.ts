import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginElectroComponent } from './login-electro.component';

describe('LoginElectroComponent', () => {
  let component: LoginElectroComponent;
  let fixture: ComponentFixture<LoginElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginElectroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
