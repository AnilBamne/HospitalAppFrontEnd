import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDocComponent } from './display-doc.component';

describe('DisplayDocComponent', () => {
  let component: DisplayDocComponent;
  let fixture: ComponentFixture<DisplayDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
