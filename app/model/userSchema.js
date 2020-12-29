const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  created: {
    type: Date
  }
})

module.exports = userSchema