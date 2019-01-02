import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualListBoxComponent } from './dual-list-box.component';

describe('DualListBoxComponent', () => {
  let component: DualListBoxComponent;
  let fixture: ComponentFixture<DualListBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualListBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
