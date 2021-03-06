import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'isLessThan'})
export class IsLessThanPipe implements PipeTransform {
  transform(input: number, check: number): boolean {
    return input < check;
  }
}
