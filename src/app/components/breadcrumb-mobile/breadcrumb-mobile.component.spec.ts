import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbMobileComponent } from './breadcrumb-mobile.component';

describe('BreadcrumbMobileComponent', () => {
  let component: BreadcrumbMobileComponent;
  let fixture: ComponentFixture<BreadcrumbMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
