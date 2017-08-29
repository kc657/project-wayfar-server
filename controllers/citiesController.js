let db = require('../models')

// GET /api/cities
function index (req, res) {
  db.City.find({}, function (err, allCities) {
    console.log(allCities)
    if (err) {
      console.log('error on GET cities: ', err)
    }
    res.json(allCities)
  })
}

// GET /api/cities/:cityId
function show (req, res) {
  db.City.findById(req.params.cityId, function (err, foundCity) {
    if (err) {
      console.log('error on GET show one city: ', err)
    }
    res.json(foundCity)
  })
}

module.exports = {
  index: index,
  show: show
}
