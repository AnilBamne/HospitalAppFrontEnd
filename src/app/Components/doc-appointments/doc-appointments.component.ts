import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/Services/doctor/doctor.service';

@Component({
  selector: 'app-doc-appointments',
  templateUrl: './doc-appointments.component.html',
  styleUrls: ['./doc-appointments.component.scss']
})
export class DocAppointmentsComponent implements OnInit {
  appointmentList:any
  constructor(private docService:DoctorService) { }

  ngOnInit(): void {
    this.GetAllAppointments();
  }
  GetAllAppointments(){
    this.docService.GetAppointments().subscribe((response:any)=>{
      console.log(response.data);
      console.log(response.message);
      this.appointmentList=response.data;
    })
  }

  RefreshEvent(event:any){
    this.GetAllAppointments();
  }
}
