import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenIconicIconsComponent } from './open-iconic-icons.component';

describe('OpenIconicIconsComponent', () => {
  let component: OpenIconicIconsComponent;
  let fixture: ComponentFixture<OpenIconicIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenIconicIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenIconicIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
