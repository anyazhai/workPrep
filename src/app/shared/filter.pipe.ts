import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: string[], startWith: string): any {
    let temp: string[] = [];
    temp = array.filter(a => a.startsWith(startWith));
    return temp;
  }

}
