import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { DoctorService } from 'src/app/Services/doctor/doctor.service';
import { PatientService } from 'src/app/Services/patient/patient.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
loginform!:FormGroup;
showPassword=true;
  constructor(private formbuilder:FormBuilder,private adminService:AdminService,private docService:DoctorService,private patientService:PatientService,private popup:MatSnackBar,private route:Router) { }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
  }

  // OnSubmit(){
  //   let data={
  //     email:this.loginform.value.email,
  //     password:this.loginform.value.password
  //   }
  //   this.adminService.Login(data).subscribe((res:any)=>{
  //     console.log(res.message);
  //     localStorage.setItem('token',res.data)
  //     console.log("Admin logged in")

  //     this.route.navigateByUrl("/");
  //      //snackbar for displaying popup msg
  //      this.popup.open('Admin Login Successfull !!!','',{
  //       duration:2000,
  //       verticalPosition:'bottom'
  //     })
  //   })
  // }
  
  OnSubmit(){
    if(this.loginform.valid){
      let data={
        email:this.loginform.value.email,
        password:this.loginform.value.password
      }
      this.adminService.CheckUser(data).subscribe((res:any)=>{
        if(res.data==1){
          
          console.log("User is a Doctor")
          this.docService.Login(data).subscribe((response:any)=>{
            console.log(response.message)
            localStorage.setItem('token',response.data)
            console.log("Doctor logged in")
            this.popup.open('Doctor Login Successfull !!!','',{
              duration:2000,
              verticalPosition:'bottom'
            })

            this.route.navigateByUrl("/doctor/appointments")
          })
        }
        else if(res.data==2){
          console.log("User is a Patient")
          this.patientService.Login(data).subscribe((response:any)=>{
            console.log(response.message)
            localStorage.setItem('token',response.data)
            console.log("Patient logged in")
            this.popup.open('Patient Login Successfull !!!','',{
              duration:2000,
              verticalPosition:'bottom'
            })
            this.route.navigateByUrl("/patients/getdoctors")
          })
        }
        else if(res.data==3){
          console.log("User is a Admin");
          this.adminService.Login(data).subscribe((response:any)=>{
            console.log(response.message);
            localStorage.setItem('token',response.data)
            console.log("Admin logged in")
            //navigate to appointments
            this.popup.open('Admin Login Successfull !!!','',{
              duration:2000,
              verticalPosition:'bottom'
            })

            this.route.navigateByUrl("/admin/appointments")

          })
        }
        else{
          console.log("Wrong input")
        }
      })
    }
    else{
      this.popup.open('Please Enter Valid Email and Password !!!','',{
        duration:2000,
        verticalPosition:'bottom'
      })
      console.log("Please Enter Valid Credentials")
    }
  }

  ShowPass(){
    this.showPassword=!this.showPassword
  }

  Register(){
    this.route.navigateByUrl("/patientregister")
  }
}
