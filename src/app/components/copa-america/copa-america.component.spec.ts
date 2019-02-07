import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopaAmericaComponent } from './copa-america.component';

describe('CopaAmericaComponent', () => {
  let component: CopaAmericaComponent;
  let fixture: ComponentFixture<CopaAmericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopaAmericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopaAmericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
