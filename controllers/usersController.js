let db = require('../models')

// GET all Users /api/users/

function show (req, res) {
  db.User.find({}, function (err, allUsers) {
    if (err) {
      console.log('error finding users: ', err)
    }
    res.json(allUsers)
  })
}
// POST to /api/users
function create (req, res) {
  db.User.create(req.body, function (err, user) {
    if (err) {
      console.log('error creating new user: ', err)
    }
    console.log('created user: ', user)
    res.json(user)
  })
}

// destroy
function destroy (req, res) {
	// var userId = req.params.user_id;
  db.User.findOneAndRemove({_id: req.params.userId}, function (err, foundUser) {
    if (err) { res.send(err) }
    console.log('deleted user: ', foundUser)
    res.json(foundUser)
  })
};

// destroy
function destroy (req, res) {
  var userId = req.params.user_id
  db.User.remove({_id: userId}, function (err, foundUser) {
    if (err) { res.send(err) }
    res.json('deleted a user')
  })
};

// Get /api/users/:userId
function showById (req, res) {
  db.User.findById(req.params.userId, function (err, foundUser) {
    if (err) {
      console.log('error on GET one ID: ', err)
    }
    res.json(foundUser)
  })
}
module.exports = {
  show: show,
  create: create,
  destroy: destroy,
  showById: showById
}
