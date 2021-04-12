import { config } from '../../helpers';
import { Schema } from '../mongoose';

const {
  String
} = Schema.Types;

const model = new Schema({
  name: {
    type: String,
    required: true,
  },

  cpf: {
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

model.index({
  cpf: 1,
}, {
  unique: true,
  background: config('env') !== 'testing',
});

model.index({
  email: 1,
}, {
  unique: true,
  background: config('env') !== 'testing',
});

export default model;
