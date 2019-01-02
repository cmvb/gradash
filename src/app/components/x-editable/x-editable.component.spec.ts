import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XEditableComponent } from './x-editable.component';

describe('XEditableComponent', () => {
  let component: XEditableComponent;
  let fixture: ComponentFixture<XEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
