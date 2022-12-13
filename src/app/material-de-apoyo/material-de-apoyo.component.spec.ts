import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDeApoyoComponent } from './material-de-apoyo.component';

describe('MaterialDeApoyoComponent', () => {
  let component: MaterialDeApoyoComponent;
  let fixture: ComponentFixture<MaterialDeApoyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDeApoyoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDeApoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
