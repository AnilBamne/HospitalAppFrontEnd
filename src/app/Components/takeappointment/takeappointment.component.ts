import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppointmentService } from 'src/app/Services/appointment/appointment.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-takeappointment',
  templateUrl: './takeappointment.component.html',
  styleUrls: ['./takeappointment.component.scss']
})
export class TakeappointmentComponent implements OnInit {
  appointmentForm!:FormGroup
docData:any
defaultValue = { hour: 13, minute: 30 };
  constructor(private dataService:DataService,private frombuilder:FormBuilder,private appointmentService:AppointmentService,private popup:MatSnackBar) { }

  ngOnInit(): void {
    this.docData=this.dataService.doctorList;
    console.log(this.docData.doctorId);
    console.log(this.docData.doctorName);

    this.appointmentForm=this.frombuilder.group({
      number:['',[Validators.required]],
      date:['',[Validators.required]],
      time:['',[Validators.required]],
      endTime:['',[Validators.required]]
    })
  }
  
  OnSubmit(){
    if(this.appointmentForm.valid){
      let data={
        doctorId:this.docData.doctorId,
        number:this.appointmentForm.value.number,
        date:this.appointmentForm.value.date,
        time:this.appointmentForm.value.time,
        endTime:this.appointmentForm.value.endTime
      }
      this.appointmentService.CreateAppointment(data).subscribe((response:any)=>{
        console.log(response.message);
        console.log(response.data)
        this.popup.open("Appointment Created  !!!",'',{
          duration:2000,
          verticalPosition:'bottom'
        })
      })
    }
    else{
      console.log("Please provide valid inputs");
      this.popup.open("Please provide valid inputs  !!!",'',{
        duration:2000,
        verticalPosition:'bottom'
      })
    }
  }
}
