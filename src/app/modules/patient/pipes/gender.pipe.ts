import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value == 0){
      return "Male"
    } else {
      return "Female"
    }
  }

}
