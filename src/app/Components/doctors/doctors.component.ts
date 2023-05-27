import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  listOfDocs:any=[]
  filtertext:any
  
  constructor(private adminService:AdminService,private dataService:DataService) { }

  ngOnInit(): void {
    
    this.GetAllDoctors();
    this.dataService.incommingData.subscribe(response=>{
      console.log("searching doc ...",response)
      this.filtertext=response;
    })
    
  }
  GetAllDoctors(){
    this.adminService.GetAllDocs().subscribe((response:any)=>{
      console.log(response.message);
      // console.log("------->",response.data)
      this.listOfDocs=response.data;
      console.log(this.listOfDocs)
    })
  }
  //update status of doctor
  RefreshEvent(event:any){
    this.GetAllDoctors();
  }
}
