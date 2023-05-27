import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
base=environment.baseurl;
token:any
  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token');
   }

  //login method
  Login(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.postService(this.base+`Doctor/Login`,data,false,header);
  }
  Register(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.postService(this.base+`Doctor/Register`,data,false,header);
  }
  GetAppointments(){
      let header={
        headers:new HttpHeaders({
          'content-type':'application/json',
          'authorization':'Bearer '+this.token
        })
      }
      return this.httpService.getService(this.base+`Doctor/GetAppointments`,true,header);
    }
  
}
