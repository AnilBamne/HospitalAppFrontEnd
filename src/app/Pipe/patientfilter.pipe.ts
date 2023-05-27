import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patientfilter'
})
export class PatientfilterPipe implements PipeTransform {

  transform(value: any,filtertext:string): any {
    if(value===''){
      return '';
    }
    const patList=[];
    for(const pattient of value){
      if(pattient.patientFirstName.includes(filtertext)){
        patList.push(pattient)
      }
    }
    
    console.log("filter applied")
    return patList;
  }

}
