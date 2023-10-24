import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from './models/interfaces/word.interface';
import { Synonym } from './models/interfaces/synonym-interface';
import { Antonyms } from './models/interfaces/antonyms-interface';
import { Examples } from './models/interfaces/examples-interface';
import { environment } from '../environmets/environmets';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  private apiKey = `${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  getWord(word: string): Observable<Word> {
    return this.http.get<Word>(
      'https://wordsapiv1.p.rapidapi.com/words/' +
        word +
        '/?rapidapi-key=' +
        this.apiKey
    );
  }

  getSynonyms(word: string): Observable<Synonym> {
    return this.http.get<Synonym>(
      'https://wordsapiv1.p.rapidapi.com/words/' +
        word +
        '/synonyms/?rapidapi-key=' +
        this.apiKey
    );
  }

  getAntonyms(word: string): Observable<Antonyms> {
    return this.http.get<Antonyms>(
      'https://wordsapiv1.p.rapidapi.com/words/' +
        word +
        '/antonyms/?rapidapi-key=' +
        this.apiKey
    );
  }

  getExamples(word: string): Observable<Examples> {
    return this.http.get<Examples>(
      'https://wordsapiv1.p.rapidapi.com/words/' +
        word +
        '/examples/?rapidapi-key=' +
        this.apiKey
    );
  }
}
