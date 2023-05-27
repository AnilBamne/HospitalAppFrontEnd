import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss']
})
export class DoctorDashboardComponent implements OnInit {

  constructor(private route:Router,private popup:MatSnackBar,private data:DataService) { }

  ngOnInit(): void {
  }
  logOut(){
    console.log("logged out")
    localStorage.removeItem('token');
    console.log("Logged out")

    this.route.navigateByUrl("/login")
    this.popup.open('LogOut Successfull !!!','',{
      duration:2000,
      verticalPosition:'bottom'
    })
  }
  Search(event:any){
    console.log(event.target.value);
    this.data.outgoingData(event.target.value);
  }

  Clear(){
    
  }

}
