import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { WordResponse } from 'src/app/models/interfaces/word-response.interface';
import { WordService } from 'src/app/word.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  @Input() list!: string[];

  @Output() onHistoryReload: EventEmitter<WordResponse> =
    new EventEmitter<WordResponse>();

  constructor(private wordService: WordService) {}

  onHistoryClick(word: string): void {
    combineLatest([
      this.wordService.getWord(word),
      this.wordService.getSynonyms(word),
      this.wordService.getAntonyms(word),
      this.wordService.getExamples(word),
    ]).subscribe(([definition, synonyms, antonyms, examples]) => {
      const response: WordResponse = {
        definition: definition,
        synonyms: synonyms,
        antonyms: antonyms,
        examples: examples,
      };
      this.onHistoryReload.emit(response);
    });
  }

  onHistoryDelete(word: string) {
    const newListAfterDelete = this.list.filter((currentWord) => {
      return currentWord !== word;
    });
    console.log(newListAfterDelete);
    this.list = newListAfterDelete;
  }
}
