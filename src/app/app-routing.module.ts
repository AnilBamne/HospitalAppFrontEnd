import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { GetappointmentsComponent } from './Components/getappointments/getappointments.component';
import { RegisterDoctorComponent } from './Components/register-doctor/register-doctor.component';
import { RegisterPatientComponent } from './Components/register-patient/register-patient.component';
import { GetdoctorsComponent } from './Components/getdoctors/getdoctors.component';
import { TakeappointmentComponent } from './Components/takeappointment/takeappointment.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { DoctorsComponent } from './Components/doctors/doctors.component';
import { PatientDashboardComponent } from './Components/patient-dashboard/patient-dashboard.component';
import { PatientsComponent } from './Components/patients/patients.component';
import { DoctorDashboardComponent } from './Components/doctor-dashboard/doctor-dashboard.component';
import { DocAppointmentsComponent } from './Components/doc-appointments/doc-appointments.component';
import { ReviewComponent } from './Components/review/review.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:AdminLoginComponent},
  {path:'registerDoc',component:RegisterDoctorComponent},
  {path:'patientregister',component:RegisterPatientComponent},
  
  {path:'admin',component:AdminDashboardComponent,
  children:[
    {path:'appointments',component:GetappointmentsComponent},
    {path:'doctorslist',component:DoctorsComponent},
    {path:'patientslist',component:PatientsComponent}
  ]},
  {path:'patients',component:PatientDashboardComponent,
  children:[
    {path:'getdoctors',component:GetdoctorsComponent},
    {path:'takeappointment',component:TakeappointmentComponent}
  ]},
  {path:'doctor',component:DoctorDashboardComponent,
  children:[
    {path:'appointments',component:DocAppointmentsComponent}
  ]},

  
  {path:'patientslist',component:PatientsComponent},
  {path:'review',component:ReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
