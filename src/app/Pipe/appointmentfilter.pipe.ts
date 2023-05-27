import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appointmentfilter'
})
export class AppointmentfilterPipe implements PipeTransform {

  transform(value: any,filtertext:string): any {
    if(value===''){
      return '';
    }
    const patList=[];
    for(const pattient of value){
      if(pattient.patientName.includes(filtertext)||pattient.doctorName.includes(filtertext)){
        patList.push(pattient)
      }
    }
    
    console.log("filter applied")
    return patList;
  }


}
