let db = require('./models')

let citiesList = [
  {
    name: 'San Francisco',
    description: 'San Francisco was founded on June 29, 1776, when colonists from Spain established Presidio of San Francisco at the Golden Gate and Mission San Francisco de Asís a few miles away, all named for St. Francis of Assisi. The California Gold Rush of 1849 brought rapid growth, making it the largest city on the West Coast at the time.',
    img_url: 'http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/SanFrancisco_0.jpg'
  },

  {
    name: 'London',
    description: 'London is the capital of the United Kingdom, a country in western Europe. It is also the capital of England, which is part of the United Kingdom. London lies on the Thames River. It is the largest city in the country.',
    img_url: 'http://i.imgur.com/LziiBHl.jpg'
  },

  {
    name: 'Sydney',
    description: 'Sydney, capital of New South Wales and one of Australias largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.',
    img_url: 'http://www.australia.com/content/australia/en_us/places/sydney/nsw-sydney-harbour/_jcr_content/image.adapt.985.HIGH.jpg'
  },

  {
    name: 'Shanghai',
    description: 'Shanghai, Hu for short, is a renowned international metropolis drawing more and more attention from all over the world. Situated on the estuary of Yangtze River, it serves as the most influential economic, financial, international trade, and cultural center in East China.',
    img_url: 'http://media2.giphy.com/media/YwJHMn7GXkTNS/giphy.gif'
  }
]

let postsList = [
  {
    title: 'Hang out in the Mission',
    text: 'The Mission District is a fabulous place to spend your night. After your busy day, go relax in Dolores Park for great views of the city, and then check out the Mission’s amazing Mexican food (and overall food scene), bars, and clubs. Watch out for hipsters!',
    image: 'https://static01.nyt.com/images/2008/09/14/travel/14hours600.jpg'
  },
  {
    title: 'Alcatraz',
    text: 'This former federal prison on Alcatraz Island was home to some of the worst criminals in the US. It was shut down in the 1970s and has since become a national landmark people can explore. There’s no charge to visit the island, but you’ll have to pay for the boat there. ',
    image: 'https://media.nomadicmatt.com/sf3.jpg'
  },
  {
    title: 'Cable Cars',
    text: 'Riding the cable cars is an excellent way to tour the city and experience various neighborhoods in San Francisco. Catch the cable cars from Market Street. They’re fun to ride and will save you lots of time walking up and down those hills.',
    image: 'https://media.nomadicmatt.com/sf10.jpg'
  },
  {
    title: 'Lombard Street',
    text: 'While riding the cable cars, make sure to get off at Lombard Street and see one of the world’s windiest streets. Watch the cars and bikers navigate the sharp turns as tourists gawk at them.',
    image: 'https://media.nomadicmatt.com/sf11.png'
  },
  {
    title: 'Big Ben',
    text: 'London has many iconic buildings, landmarks and sights to be seen, whether they be old or new the city is constantly evolving and is rich in historic culture. To help you along your way if you haven’t been to the city before, we’ve created a list of the 20 must see London attractions whilst you’re there',
    image: 'https://s3.amazonaws.com/bloglovin-user-images-prod/native-post-img-1-425-57e1af90600dc'
  },
  {
    title: 'London in Winter',
    text: 'Winter is coming, or at least that’s what John Snow keeps telling us! Well, that winter has finally reached London, minus the white walkers and the Lanisters at least. Unlike that raucous bunch in Game of Thrones, winter doesn’t have to be a scary though in London. In fact it can be a pretty magical time to explore the city. ',
    image: 'https://s3.amazonaws.com/bloglovin-user-images-prod/native-post-img-1-425-57e1af92af33a'
  },
  {
    title: 'Great Shot of London',
    text: 'When we shared that we were headed to London we received the most incredible list of recommendations. I was blown away by not only the vast amount of recommendations but the quality of them. ',
    image: 'https://s3.amazonaws.com/bloglovin-user-images-prod/native-post-img-1-425-57e1af9905592'
  },
  {
    title: 'Best View of London',
    text: 'If you’re looking to get a bird’s-eye view of London, there are several spots in the city that offer spectacular views. Don’t worry if you’re afraid of heights, as you’ll be sure to find a spot that fits both within your comfort level and budget.',
    image: 'https://cdn3.blovcdn.com/bloglovin/aHR0cHMlM0ElMkYlMkZzMy5hbWF6b25hd3MuY29tJTJGYmxvZ2xvdmluLXVzZXItaW1hZ2VzLXByb2QlMkZuYXRpdmUtcG9zdC1pbWctMS00MjUtNTdlMWFmOWVhM2E3Zg==?checksum=63b53ea0b52a8773802a16971603880624871805&format=s'
  },
  {
    title: 'Sydney is a fantastic holiday destination',
    text: 'There is so much to see here and so much to do that it’s easy to fill a whole week with lots of exciting things to do. Think of beaches, culture, history, and nature. Cute koalas, stunning locations, and a relaxed lifestyle.',
    image: 'https://i0.wp.com/www.happinessandthings.com/wp-content/uploads/2015/02/DSC_0003.jpg?w=1024'
  },
  {
    title: 'Sydney’s shady past',
    text: 'Today, this vibrant quarter is a popular tourist attraction that never gets boring. As you walk the pebble stone streets and laneways enjoy some window-shopping as you pass the boutique designer shops, grab a snack from the market (if you are visiting on the weekends), listen to some live music, and simply soak up the fun atmosphere.',
    image: 'https://i0.wp.com/www.happinessandthings.com/wp-content/uploads/2016/12/Sydney-ferry.jpg?w=800'
  },
  {
    title: 'Sydney’s surf culture',
    text: 'When you ask people about the biggest difference between Sydney and Melbourne it surely needs to be the fantastic surf culture that we have in this city. The best way to explore the vibe is by taking a walk along the coast, starting at Sydney’s best known beach, Bondi Beach',
    image: 'https://i1.wp.com/www.happinessandthings.com/wp-content/uploads/2015/02/DSC_00223.jpg?w=1024'
  },
  {
    title: 'Opera House!',
    text: 'Designed by Danish architect Jørn Utzon, the building was formally opened on 20 October 1973[4] after a gestation beginning with Utzons 1957 selection as winner of an international design competition.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/The_Sydney_Opera_House_at_dusk.jpg/2560px-The_Sydney_Opera_House_at_dusk.jpg'
  },
  {
    title: 'Shanghai to Beijing',
    text: 'Between Beijing & Shanghai, the train is the way to go.  Choose between a 300 km/h (186 mph) high-speed train over the high-speed line in as little as 4 hours 48 minutes or a time-effective 250 km/h (156 mph) express sleeper train, which also saves a hotel bill. ',
    image: 'https://www.seat61.com/images/beijing-to-shanghai-beijing.jpg'
  },
  {
    title: 'Cafes and Food!',
    text: 'There are many quaint cafes located along the riverbanks, with the standard offerings of “tea, coffee and beer”. Unfortunately, we had to rush to catch the bus back to Shanghai, but I can imagine it must be great to chill out in one of the cafes along the riverbank.',
    image: 'https://i0.wp.com/www.eatandtravelwithus.com/wp-content/uploads/2014/11/ZhuJiaJiao-Food-1.jpg?w=800'
  },
  {
    title: 'View at Night',
    text: 'Back in the day, the only Shanghai I know was the Lumpiang Shanghai or Shanghai rolls hahaha! Kidding aside, I have always wanted to visit the second largest city in China. ',
    image: 'https://twomonkeystravelgroup.com/wp-content/uploads/2015/11/awesome-things-to-do-in-shanghai-15.jpg'
  },
  {
    title: 'Nanpu Bridge',
    text: 'Shanghai’s main streets and back roads give an immediate feeling of old versus new. The old consists not so much of Chinese style buildings as European buildings, and while it might seem that temples would be a great place to visit to find older buildings, many of these have been rebuilt in the last forty years. ',
    image: 'https://twomonkeystravelgroup.com/wp-content/uploads/2015/11/awesome-things-to-do-in-shanghai-18.jpg'
  },
]

db.User.remove({}, function (err, removedUsers) {
  db.Post.remove({}, function (err, removedPosts) {
    db.City.remove({}, function (err, cities) {
      db.City.create(citiesList, function (err, cities) {
        if (err) {
          return console.log('ERROR seeding cities: ', err)
        }

        // for each city
        cities.forEach(function (city, index) {
          // for each of the dummy posts
          postsList.forEach(function (element) {
            // create a Post in the DB post with the _city for its corresponding city
            let newPost = {
              title: element.title,
              text: element.text,
              image: element.image,
              _city: city._id
            }
            console.log('EACH POST: ', newPost)

            db.Post.create(newPost, function (err, savedPost) {
              if (err) {
                console.log('error saving seed post: ', err)
              }
              console.log('saved seed post: ', savedPost)
            })
          })
        }) // end of cities forEach
      })
    })
  })
})
