// models/Category.js
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = mongoose.model('Category', categorySchema);

