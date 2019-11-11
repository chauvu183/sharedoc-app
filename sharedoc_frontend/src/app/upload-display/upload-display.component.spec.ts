import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDisplayComponent } from './upload-display.component';

describe('UploadDisplayComponent', () => {
  let component: UploadDisplayComponent;
  let fixture: ComponentFixture<UploadDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
