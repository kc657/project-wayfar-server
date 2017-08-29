let mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/waywayfar')

let City = require('./city.js')
let Post = require('./post.js')
let User = require('./user.js')

module.exports.City = City
module.exports.Post = Post
module.exports.User = User
