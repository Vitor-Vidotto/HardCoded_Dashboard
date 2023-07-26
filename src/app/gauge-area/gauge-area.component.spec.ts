import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeAreaComponent } from './gauge-area.component';

describe('GaugeAreaComponent', () => {
  let component: GaugeAreaComponent;
  let fixture: ComponentFixture<GaugeAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaugeAreaComponent]
    });
    fixture = TestBed.createComponent(GaugeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
