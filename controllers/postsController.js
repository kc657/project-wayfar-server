let db = require('../models')

// POST to posts /api/posts/

function create (req, res) {
  db.Post.create(req.body, function (err, post) {
    if (err) {
      console.log('error creating new post: ', err)
    }
    console.log('created post: ', post)
    res.json(post)
  })
}

// GET all posts /api/posts/

function show (req, res) {
  db.Post.find({}, function (err, allPosts) {
    if (err) {
      console.log('error finding posts (by city): ', err)
    }
    res.json(allPosts)
  })
}

// DELETE a post /api/posts/:postId

function destroy (req, res) {
  db.Post.findOneAndRemove({ _id: req.params.postId }, function (err, foundPost) {
    if (err) {
      console.log('error deleting post: ', err)
    }
    res.json(foundPost)
  })
}

// GET posts and filter by cityId /api/cities/:cityId/posts/

function indexByCity (req, res) {
  var city_id = req.params.cityId
  db.Post.find({_city: city_id}, function (err, postsByCity) {
    if (err) {
      console.log('error finding posts (by city): ', err)
    }

    console.log('req.params.cityId', req.params.cityId)

    postsByCity.forEach(function (post) {
      console.log('post _city', post._city)
    })

    res.json({postsByCity})
  })
}

// UPDATE posts by id /api/posts/:postId

function update (req, res) {
  console.log('updating with data: ', req.body)
  db.Post.findById(req.params.postId, function (err, foundPost) {
    if (err) {
      console.log('error updating post', err)
    }
    foundPost.title = req.body.title
    foundPost.text = req.body.text
    foundPost.image = req.body.image
    foundPost.save(function (err, savedPost) {
      if (err) {
        console.log('error saving updated post', err)
      }
      res.json(savedPost)
    })
  })
}

module.exports = {
  create: create,
  show: show,
  destroy: destroy,
  indexByCity: indexByCity,
  update: update
}
