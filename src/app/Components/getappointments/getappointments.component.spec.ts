import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetappointmentsComponent } from './getappointments.component';

describe('GetappointmentsComponent', () => {
  let component: GetappointmentsComponent;
  let fixture: ComponentFixture<GetappointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetappointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
