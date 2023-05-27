import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
patientslist:any
filtertext:any
  constructor(private adminService:AdminService,private dataService:DataService) { }

  ngOnInit(): void {
    this.GetPatients();
    this.dataService.incommingData.subscribe(response=>{
      console.log("searching patient ...",response)
      this.filtertext=response;
    })
  }
  GetPatients(){
    this.adminService.GetAllPatients().subscribe((response:any)=>{
      console.log(response.data);
      this.patientslist=response.data;
    })
  }
}
