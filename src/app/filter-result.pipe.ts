import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterResult'
})
export class FilterResultPipe implements PipeTransform {

  transform(value: any, args?: any[]): any[] {
    return value = value.filter(a => {
      return args.length ? args.indexOf(a.status) != -1 : value;
    })      
  }
}