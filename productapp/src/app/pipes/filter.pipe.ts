import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[],  value: string): any[] {
      console.log(items);
      console.log(value);
    if (!items) {
      return [];
    }
   

    return items.filter(singleItem => {
        console.log(singleItem);
     
        return singleItem.toLowerCase().includes(value.toLowerCase());
      
    }
    );
  }

}
