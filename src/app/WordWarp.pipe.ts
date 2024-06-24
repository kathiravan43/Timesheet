import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'WordWarp'
})
export class WordWarpPipe implements PipeTransform {

  transform(value: string): string {
    // Split the sentence into individual words
    const words = value.split(' ');

    // Define the maximum number of characters per line
    const maxCharactersPerLine = 5;

    // Initialize variables
    let result = '';
    let line = '';

    // Iterate over each word
    for (const word of words) {
      // Check if adding the current word exceeds the maximum characters per line
      if ((line + word).length > maxCharactersPerLine) {
        // Add the current line to the result and start a new line
        result += line.trim() + '\n';
        line = '';
      }

      // Add the current word to the line
      line += word + ' ';
    }

    // Add the remaining line to the result
    result += line.trim();

    return result;
  }
}
