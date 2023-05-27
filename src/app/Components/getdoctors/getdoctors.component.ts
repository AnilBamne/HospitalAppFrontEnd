import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { DataService } from 'src/app/Services/data.service';
import { PatientService } from 'src/app/Services/patient/patient.service';

@Component({
  selector: 'app-getdoctors',
  templateUrl: './getdoctors.component.html',
  styleUrls: ['./getdoctors.component.scss']
})
export class GetdoctorsComponent implements OnInit {
  listOfDocs:any=[];
  filtertext:any
  constructor(private patService:PatientService,private dataService:DataService) { }

  ngOnInit(): void {
   this.GetAllDoctors()
   this.dataService.incommingData.subscribe(response=>{
    console.log("searching note ...",response)
    this.filtertext=response;
  })
  }
 
  GetAllDoctors(){
    this.patService.GetAllDocs().subscribe((response:any)=>{
      console.log(response.message);
      this.listOfDocs=response.data;
      console.log(this.listOfDocs)
    })
  }

  CreateAppointment(data:any){
    console.log(data)
    this.dataService.doctorList=data;
  }
  
}
