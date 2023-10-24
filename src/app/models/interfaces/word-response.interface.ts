import { Antonyms } from './antonyms-interface';
import { Examples } from './examples-interface';
import { Synonym } from './synonym-interface';
import { Word } from './word.interface';

export interface WordResponse {
  definition: Word;
  synonyms: Synonym;
  antonyms: Antonyms;
  examples: Examples;
}
