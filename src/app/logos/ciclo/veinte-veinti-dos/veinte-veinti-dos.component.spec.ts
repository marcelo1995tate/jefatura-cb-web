import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeinteVeintiDosComponent } from './veinte-veinti-dos.component';

describe('VeinteVeintiDosComponent', () => {
  let component: VeinteVeintiDosComponent;
  let fixture: ComponentFixture<VeinteVeintiDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeinteVeintiDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeinteVeintiDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
