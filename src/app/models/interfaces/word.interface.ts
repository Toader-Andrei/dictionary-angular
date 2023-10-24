export interface Word {
  word: string;
  results: [
    {
      definition: string;
      partOfSpeech: string;
      typeOf: string[];
      derivation: string[];
    },
    {
      definition: string;
      partOfSpeech: string;
      typeOf: string[];
      derivation: string[];
    }
  ];
  syllables: {
    count: number;
    list: string[];
  };
  pronunciation: {
    all: string;
  };
}
