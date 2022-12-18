import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputToValue'
})
export class InputToValuePipe implements PipeTransform {

  getInputValue = (event: any): number => {
    return parseInt(event['target'].value, 10);
  }

  transform(value: any): number | null {
    return value !== null ? this.getInputValue(value) : null;
  }

}
