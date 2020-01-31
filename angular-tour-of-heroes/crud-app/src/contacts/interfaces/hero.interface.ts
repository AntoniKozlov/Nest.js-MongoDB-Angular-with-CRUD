import { Document } from 'mongoose';

export interface allHeroes extends Document {
  readonly name: string;
  readonly level: number;
  readonly age: number;
  readonly cls: string;
  readonly power:number;
}
