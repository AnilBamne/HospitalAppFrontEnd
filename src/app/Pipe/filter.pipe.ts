import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,filtertext:string): any {
   if(value===''){
    return '';
   }

   const docList=[];
    for(const doc of value){
      if(doc.doctorName.includes(filtertext) || doc.doctorSpecialization.includes(filtertext)){
        docList.push(doc);
      }
    }
    console.log("filter applied")
    return docList;
  }

}
