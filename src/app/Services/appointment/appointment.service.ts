import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
base=environment.baseurl;
token:any
  constructor(private httpService:HttpService) { 
    this.token=localStorage.getItem('token');
  }
  GetAppointments(){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.getService(this.base+`Appointment/GetAllAppointments`,true,header);
  }
  CreateAppointment(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(this.base+`Appointment/CreateAppointment?doctorId=`+data.doctorId+`&number=`+data.number+`&date=`+data.date+`&time=`+data.time+`&endTime=`+data.endTime,{},true,header)
  }
  EditAppointment(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService(this.base+`Appointment/UpdateAppointment?appointmentId=`+data.Id+`&date=`+data.date+`&time=`+data.time+`&endTime=`+data.endTime,{},true,header)
  }
}
