export interface FilmsResponse extends Object {
  count: number;
  next: string;
  previous: string;
  results: Film[];
}

export interface Film {
  id: string;
  title: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  url: string;
  characters: string[];
}
