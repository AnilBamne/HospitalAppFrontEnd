import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/Services/patient/patient.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent implements OnInit {
  registerorm!:FormGroup
  constructor(private formbuilder:FormBuilder,private patService:PatientService,private route:Router,private popup:MatSnackBar) { }

// Applying validations 
  ngOnInit(): void {
    
    this.registerorm=this.formbuilder.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      gender:['',[Validators.required]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      desies:['',[Validators.required]]
    })
  }
  OnSubmit(){
    let data={
      patientFirstName:this.registerorm.value.firstName,
      patientLastName:this.registerorm.value.lastName,
      patientEmail:this.registerorm.value.email,
      patientPassword:this.registerorm.value.password,
      patientGender:this.registerorm.value.gender,
      patientAddress:this.registerorm.value.address,
      patientCity:this.registerorm.value.city,
      patientState:this.registerorm.value.state,
      patientDesies:this.registerorm.value.desies,
    }
    this.patService.Register(data).subscribe((response:any)=>{
        console.log(response.message);
        console.log("Patient registered successfully")
        console.log(response.data)
        this.route.navigateByUrl("/home")
        this.popup.open("Patient Registered Successfully !!!",'',{
          duration:2000,
          verticalPosition:'bottom'
        })
    })
  }

}
