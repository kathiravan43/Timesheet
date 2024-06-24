import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TimePipe'
})
export class TimePipePipe implements PipeTransform {

  transform(value: string): string {
    const timeParts = value.split(':');
    let hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    let meridiem = 'AM';

    if (hours >= 12) {
      hours -= 12;
      meridiem = 'PM';
    }

    if (hours === 0) {
      hours = 12;
    }

    return `${hours}:${minutes.toString().padStart(2, '0')} ${meridiem}`;
  }

}
