import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  description: String,
  name: String,
  qty: Number,
});
