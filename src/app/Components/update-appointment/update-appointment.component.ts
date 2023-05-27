import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppointmentService } from 'src/app/Services/appointment/appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.scss']
})
export class UpdateAppointmentComponent implements OnInit {
  appointmentId:any
  date:any;
  time:any;
  endTime:any;
  constructor(private appointmentService:AppointmentService,private popup:MatSnackBar ,private dialog:MatDialogRef<UpdateAppointmentComponent>, @Inject(MAT_DIALOG_DATA) public data:any) {
    this.appointmentId=data.appointmentId;
    this.date=data.date;
    this.time=data.time;
    this.endTime=data.endTime;
   }

  ngOnInit(): void {
  }
  closeDialog(){
    console.log("Updating details for appointment id:"+this.appointmentId+" are :",this.date,this.time,this.endTime)
    let data={
      Id:this.appointmentId,
      date:this.date,
      time:this.time,
      endTime:this.endTime
    }
    this.appointmentService.EditAppointment(data).subscribe((response:any)=>{
      console.log(response.message);
      this.popup.open("Appointment Updated Successfully  !!!",'',{
        duration:2000,
        verticalPosition:'bottom'
      })
    })
    this.dialog.close()
  }
}
