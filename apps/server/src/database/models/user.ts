import { Schema } from 'mongoose';

const {
  String
} = Schema.Types;

const model = new Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    lowercase: true,
  },

  password: {
    type: String,
    select: false,
    required: true,
    trim: false,
  },
}, {
  collection: 'users',

  timestamps: true,

  toObject: {
    virtuals: true,
  },

  toJSON: {
    virtuals: true,
  },
});

export default model;
