import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoImportanteComponent } from './info-importante.component';

describe('InfoImportanteComponent', () => {
  let component: InfoImportanteComponent;
  let fixture: ComponentFixture<InfoImportanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoImportanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoImportanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
