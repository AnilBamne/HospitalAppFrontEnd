import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { AppointmentService } from 'src/app/Services/appointment/appointment.service';
import { DataService } from 'src/app/Services/data.service';
import { UpdateAppointmentComponent } from '../update-appointment/update-appointment.component';

@Component({
  selector: 'app-display-appointments',
  templateUrl: './display-appointments.component.html',
  styleUrls: ['./display-appointments.component.scss']
})
export class DisplayAppointmentsComponent implements OnInit {
  @Input() appointmentList:any
  @Output() appointmentEvent=new EventEmitter()
  message:any
  filtertext:any
  constructor(private adminService:AdminService,private dataService:DataService,private appointmentService:AppointmentService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.incommingData.subscribe(response=>{
      console.log("searching doc ...",response)
      this.filtertext=response;
    })
  }

  Delete(appointmentId:any){
    console.log(appointmentId)
    this.adminService.DeleteAppointment(appointmentId).subscribe((res:any)=>{
      console.log("Appointment deleted",res.message);
      this.appointmentEvent.emit(res)
    })
  }
  Edit(data:any){
    console.log(data)
    let dialogbox=this.dialog.open(UpdateAppointmentComponent,{
      width:'40%',
      height:'auto',
      data:data
    })
    dialogbox.afterClosed().subscribe(result=>{
      console.log("After update",this.message);
      this.appointmentEvent.emit(this.message);
    })
  }
}
