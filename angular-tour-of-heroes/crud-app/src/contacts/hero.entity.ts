import * as mongoose from 'mongoose';

export const TOHSchema = new mongoose.Schema({
  name: String,
  level: Number,
  age: Number,
  cls: String,
  power:Number,
},{ versionKey: false });
