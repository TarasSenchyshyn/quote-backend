const mongoose = require('mongoose');
const constants = require('./constants.js');

let config = {
  port: '8000',
};

mongoose.connect(
  'mongodb+srv://Taras:Taras123@cluster0.4voyx.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
);

module.exports = { ...config, constants };
