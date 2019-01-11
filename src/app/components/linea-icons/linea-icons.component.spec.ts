import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaIconsComponent } from './linea-icons.component';

describe('LineaIconsComponent', () => {
  let component: LineaIconsComponent;
  let fixture: ComponentFixture<LineaIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
