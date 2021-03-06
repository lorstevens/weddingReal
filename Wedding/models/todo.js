const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
  action: {
    type: String,
    required: [false, 'The todo text field is required']
  },
  firstName: {
    type: String,
    required: [true, 'The todo text field is required']
  },
  lastName: {
    type: String,
    required: [true, 'The todo text field is required']
  },
  rsvp: {
    type: String,
    required: [true, 'The todo text field is required']
  },
  guest: {
    type: String,
    required: [false, 'The todo text field is required']
  }
})

//create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;