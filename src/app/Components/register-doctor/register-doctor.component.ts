import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/Services/doctor/doctor.service';

@Component({
  selector: 'app-register-doctor',
  templateUrl: './register-doctor.component.html',
  styleUrls: ['./register-doctor.component.scss']
})
export class RegisterDoctorComponent implements OnInit {
  RegisterDocForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private docterService:DoctorService,private route:Router,private popup:MatSnackBar) { }

  ngOnInit(): void {
    this.RegisterDocForm=this.formBuilder.group({
      doctorName:['',[Validators.required]],
      doctorGender:['',[Validators.required]],
      doctorSpecialization:['',[Validators.required]],
      doctorNumber:['',[Validators.required]],
      doctorEmail:['',[Validators.required,Validators.email]],
      doctorPassword:['',[Validators.required]],
    })
  }
  OnSubmit(){
    let data={
      doctorName:this.RegisterDocForm.value.doctorName,
      doctorGender:this.RegisterDocForm.value.doctorGender,
      doctorSpecialization:this.RegisterDocForm.value.doctorSpecialization,
      doctorNumber:parseInt(this.RegisterDocForm.value. doctorNumber),
      doctorEmail:this.RegisterDocForm.value.doctorEmail,
      doctorPassword:this.RegisterDocForm.value.doctorPassword
    }
    this.docterService.Register(data).subscribe((response:any)=>{
      console.log(response.message);
      console.log(response.data);
      this.route.navigateByUrl("/home")
      this.popup.open('Doctor Registered Successfull !!!','',{
        duration:2000,
        verticalPosition:'bottom'
      })
    })
   
  }
}
