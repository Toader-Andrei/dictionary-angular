import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { WordResponse } from 'src/app/models/interfaces/word-response.interface';
import { WordService } from 'src/app/word.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() onWordSearch: EventEmitter<WordResponse> =
    new EventEmitter<WordResponse>();

  word!: string;

  constructor(private wordService: WordService) {}

  onSubmit() {
    if (!this.word) {
      alert('Please enter a word that exist!');
      return;
    }

    combineLatest([
      this.wordService.getWord(this.word),
      this.wordService.getSynonyms(this.word),
      this.wordService.getAntonyms(this.word),
      this.wordService.getExamples(this.word),
    ]).subscribe(([definition, synonyms, antonyms, examples]) => {
      const response: WordResponse = {
        definition: definition,
        synonyms: synonyms,
        antonyms: antonyms,
        examples: examples,
      };
      this.onWordSearch.emit(response);
    });

    this.word = '';
  }
}
