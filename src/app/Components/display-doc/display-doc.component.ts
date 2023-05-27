import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-display-doc',
  templateUrl: './display-doc.component.html',
  styleUrls: ['./display-doc.component.scss']
})
export class DisplayDocComponent implements OnInit {
  filtertext:any
  @Input() doctorlist:any
  @Output() displayDcoEvent=new EventEmitter();
  constructor(private adminService:AdminService,private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.incommingData.subscribe(response=>{
      console.log("searching doc ...",response)
      this.filtertext=response;
    })
  }
  ProvideAccess(Id:any){
    this.adminService.AllowAccess(Id).subscribe((response:any)=>{
      console.log("Doctor has access to login now",response.message)
      this.displayDcoEvent.emit(response);
    })
    //location.reload();
  }
  RemoveAccess(Id:any){
    this.adminService.RemoveAccess(Id).subscribe((response:any)=>{
      console.log("Doctor access is removed now",response.message)
      this.displayDcoEvent.emit(response);
    })
  }
}
