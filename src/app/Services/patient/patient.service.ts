import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
 
})
export class PatientService {
  base=environment.baseurl;
  token:any
  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token')
   }
  Login(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.postService(this.base+`Patient/Login`,data,false,header);
  }

  Register(data:any){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.postService(this.base+`Patient/Register`,data,false,header);
  }

  GetAllDocs(){
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(this.base+`Patient/GetAllDoctors`,true,header)
  }
}
