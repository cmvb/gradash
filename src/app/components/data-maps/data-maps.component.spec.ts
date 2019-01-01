import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMapsComponent } from './data-maps.component';

describe('DataMapsComponent', () => {
  let component: DataMapsComponent;
  let fixture: ComponentFixture<DataMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
