import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortenString', pure: false })
export class ShortenString implements PipeTransform {
  transform(text: string, charCount = 18) {
    return text.length > charCount ? `${text.substring(0, charCount - 2)}...` : text;
  }
}
