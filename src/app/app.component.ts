import { Component } from '@angular/core';
import { Word } from './models/interfaces/word.interface';
import { Synonym } from './models/interfaces/synonym-interface';
import { Antonyms } from './models/interfaces/antonyms-interface';
import { Examples } from './models/interfaces/examples-interface';
import { WordResponse } from './models/interfaces/word-response.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  word!: WordResponse;

  history: string[] = [];

  onWordSearch(response: WordResponse): void {
    this.word = response;
    this.history.push(response.definition.word);
  }
  onHistorySearch(response: WordResponse): void {
    this.word = response;
  }
}
