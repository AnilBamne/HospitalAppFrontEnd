import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAppointmentsComponent } from './doc-appointments.component';

describe('DocAppointmentsComponent', () => {
  let component: DocAppointmentsComponent;
  let fixture: ComponentFixture<DocAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
