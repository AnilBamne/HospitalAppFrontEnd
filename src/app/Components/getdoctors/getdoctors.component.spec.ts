import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdoctorsComponent } from './getdoctors.component';

describe('GetdoctorsComponent', () => {
  let component: GetdoctorsComponent;
  let fixture: ComponentFixture<GetdoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
