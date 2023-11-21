import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroOrTwoDecimals',
  standalone: true
})
export class ZeroOrTwoDecimalsPipe implements PipeTransform {
  transform(price: number): string {
    return price.toFixed(2).replace('.', ',').replace(',00', '');
  }
}
