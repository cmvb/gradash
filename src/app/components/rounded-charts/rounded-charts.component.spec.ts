import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedChartsComponent } from './rounded-charts.component';

describe('RoundedChartsComponent', () => {
  let component: RoundedChartsComponent;
  let fixture: ComponentFixture<RoundedChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundedChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
