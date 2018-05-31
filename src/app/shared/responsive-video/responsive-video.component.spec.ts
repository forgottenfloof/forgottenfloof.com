import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveVideoComponent } from './responsive-video.component';

describe('ResponsiveVideoComponent', () => {
  let component: ResponsiveVideoComponent;
  let fixture: ComponentFixture<ResponsiveVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
