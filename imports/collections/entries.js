import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../helpers';

export const Entries = new Mongo.Collection('entries');

const Comment = Class.create({
  name: 'Comment',
  behaviors: ['timestamp'],
  secured: false,
  fields: {
    content: String,
    author: String,
  },
});

export const Entry = Class.create({
  name: 'Entry',
  collection: Entries,
  secured: false,
  fields: {
    name: String,
    comments: {
      type: [Comment],
      default() {
        return []
      },
    },
  },
});

globalizeData({ Entries }, { Entry });
globalizeData({ }, { Comment });
