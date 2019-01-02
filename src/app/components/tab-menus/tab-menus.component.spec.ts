import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMenusComponent } from './tab-menus.component';

describe('TabMenusComponent', () => {
  let component: TabMenusComponent;
  let fixture: ComponentFixture<TabMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
