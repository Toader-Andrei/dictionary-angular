import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Antonyms } from 'src/app/models/interfaces/antonyms-interface';
import { Examples } from 'src/app/models/interfaces/examples-interface';
import { Synonym } from 'src/app/models/interfaces/synonym-interface';
import { WordResponse } from 'src/app/models/interfaces/word-response.interface';
import { Word } from 'src/app/models/interfaces/word.interface';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent implements OnChanges {
  @Input() word!: WordResponse;

  definition!: Word;
  synonymsResponse!: Synonym;
  antonymsResponse!: Antonyms;
  examplesResponse!: Examples;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['word'] && changes['word'].currentValue) {
      const response = changes['word'].currentValue;
      this.definition = response.definition;
      this.synonymsResponse = response.synonyms;
      this.antonymsResponse = response.antonyms;
      this.examplesResponse = response.examples;
    }
  }
}
