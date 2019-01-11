import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetrizaIconsComponent } from './metriza-icons.component';

describe('MetrizaIconsComponent', () => {
  let component: MetrizaIconsComponent;
  let fixture: ComponentFixture<MetrizaIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetrizaIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetrizaIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
