import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'kebabCase', pure: false })
export class KebabCasePipe implements PipeTransform {
  transform(text: string) {
    return text.replace(' ', '-').toLowerCase();
  }
}
