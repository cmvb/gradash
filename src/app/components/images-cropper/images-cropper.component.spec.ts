import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCropperComponent } from './images-cropper.component';

describe('ImagesCropperComponent', () => {
  let component: ImagesCropperComponent;
  let fixture: ComponentFixture<ImagesCropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesCropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
