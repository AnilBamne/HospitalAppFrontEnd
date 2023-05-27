import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
doctorList:any=[]
appointmentList:any
  constructor() { }
  
  private messageSource=new BehaviorSubject([]);    //this text we are searching for
  incommingData=this.messageSource.asObservable();

  outgoingData(message:any){         //updating value of messagesource
    console.log("Serch for : ",message);
    this.messageSource.next(message);
  }
}
