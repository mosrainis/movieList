import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'more'
})
export class MorePipe implements PipeTransform {

  transform(text: string, start: number, end: number): any {
    return text.substr(start,end)
  }

}
