import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeityChartsComponent } from './peity-charts.component';

describe('PeityChartsComponent', () => {
  let component: PeityChartsComponent;
  let fixture: ComponentFixture<PeityChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeityChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeityChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
