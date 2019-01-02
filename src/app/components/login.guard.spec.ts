import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard';

describe('LoginGuard', () => {
  let component: LoginGuard;
  let fixture: ComponentFixture<LoginGuard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginGuard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGuard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});