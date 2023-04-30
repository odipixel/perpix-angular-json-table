import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderbyPipe implements PipeTransform {

  transform(data: any[], order: "asc" | "desc" = "asc",prop?:any): any[] {
      return data.sort((a, b) => {
        return (a[prop] < b[prop] ? -1 : 1) * (order=='asc' ? 1 : -1)
    });
  }
}
