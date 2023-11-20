import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cutText',
  standalone: true
})
export class CutTextPipe implements PipeTransform {
  transform(value: string, cutAt: number): unknown {
    if (value.length <= cutAt) {
      return value;
    }
    return value.substring(0, cutAt).trimEnd() + "...";
  }
}
