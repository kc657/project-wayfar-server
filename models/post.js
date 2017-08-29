let mongoose = require('mongoose')
let Schema = mongoose.Schema
let City = require('./city')
let User = require('./user')

let PostSchema = new Schema({
  title: String,
  text: String,
  _city: {type: Schema.Types.ObjectId, ref: 'City'},
  image: String,
  date: { type: Date, default: Date.now }
  // _user: {type: Schema.Types.ObjectId, ref: 'User'}
})

let Post = mongoose.model('Post', PostSchema)
module.exports = Post
