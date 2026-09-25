import { Actor } from './actor';

export interface Prize {
  id?: number;
  name: string;
}

export interface Movie {
  id?: number;
  title: string;
  releaseDate: string;
  description?: string;
  duration?: number;
  actors?: Actor[];
  prizes?: Prize[];
}