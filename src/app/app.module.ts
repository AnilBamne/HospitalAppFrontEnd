import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatSidenavModule} from'@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
// import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
// import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular';
// import { Cloudinary } from 'cloudinary-core';


import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { GetappointmentsComponent } from './Components/getappointments/getappointments.component';
import { RegisterDoctorComponent } from './Components/register-doctor/register-doctor.component';
import { RegisterPatientComponent } from './Components/register-patient/register-patient.component';
import { GetdoctorsComponent } from './Components/getdoctors/getdoctors.component';
import { TakeappointmentComponent } from './Components/takeappointment/takeappointment.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FilterPipe } from './Pipe/filter.pipe';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './Components/patient-dashboard/patient-dashboard.component';
import { DoctorsComponent } from './Components/doctors/doctors.component';
import { PatientsComponent } from './Components/patients/patients.component';
import { PatientfilterPipe } from './Pipe/patientfilter.pipe';
import { DisplayDocComponent } from './Components/display-doc/display-doc.component';
import { DisplayAppointmentsComponent } from './Components/display-appointments/display-appointments.component';
import { DoctorDashboardComponent } from './Components/doctor-dashboard/doctor-dashboard.component';
import { UpdateAppointmentComponent } from './Components/update-appointment/update-appointment.component';
import { DocAppointmentsComponent } from './Components/doc-appointments/doc-appointments.component';
import { AppointmentfilterPipe } from './Pipe/appointmentfilter.pipe';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ReviewComponent } from './Components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    GetappointmentsComponent,
    RegisterDoctorComponent,
    RegisterPatientComponent,
    GetdoctorsComponent,
    TakeappointmentComponent,
    FilterPipe,
    AdminDashboardComponent,
    PatientDashboardComponent,
    DoctorsComponent,
    PatientsComponent,
    PatientfilterPipe,
    DisplayDocComponent,
    DisplayAppointmentsComponent,
    DoctorDashboardComponent,
    UpdateAppointmentComponent,
    DocAppointmentsComponent,
    AppointmentfilterPipe,
    AboutUsComponent,
    ReviewComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatTableModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // NgxMatTimepickerModule
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
