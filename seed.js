var db=require('./models');

db.User.remove({}, function(err, succ){
  console.log(succ);

});

var user=
  {
    'name': 'Hunter Cote',
    'username': 'Hunter@gmail.com',
    'password': '123',
    'isLocal': 'Local',
    'age': 24,
    'city': 'San Francisco',
    'bio': 'I am from Colorado but have been based in San Francisco for the past decade, and my warm personality, storytelling expertise and contagious passion will bring SF’s history to life for you, whether you’re wandering laneways of artisan workshops or the Uffizi gallery.',
    'image': 'String'
  };

  db.User.create(user, function(err, succ) {
    console.log(succ);
  })

  var user2 =
    {
      'name': 'Erik Salazar',
      'username': 'Erik@gmail.com',
      'password': '123',
      'isLocal': 'Local',
      'age': 22,
      'city': 'San Francisco',
      'bio': 'I, since having branched out as an independent guide, do not come with any kind of must-see plan, but say: “My tours are like a pizza, where the guests tell me what toppings to add. Of course, you need to know about the culture, the arts, the museums, but I prefer to show my visitors the people, so they actually get to meet locals"',
      'image': 'String'
    };

    db.User.create(user2, function(err, succ) {
      console.log(succ);
    })

    var user3 =
      {
        'name': 'Terrell Tullis',
        'username': 'Terrell@gmail.com',
        'password': '123',
        'isLocal': 'Local',
        'age': 24,
        'city': 'San Francisco',
        'bio': 'Anything from a dumpling-making class to a hunt for the metropolis’s namesake brittle-skinned duck or a home-style dinner with a local family in the countryside is possible on my unconventional culinary forays.',
        'image': 'String'
      };

      db.User.create(user3, function(err, succ) {
        console.log(succ);
      });
