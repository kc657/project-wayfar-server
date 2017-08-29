let mongoose = require('mongoose')
let Schema = mongoose.Schema

let CitySchema = new Schema({
  name: String,
  description: String,
  img_url: String
})

let City = mongoose.model('City', CitySchema)
module.exports = City
