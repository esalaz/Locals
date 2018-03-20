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
    'bio': 'Hunters bio',
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
      'bio': 'Eriks bio',
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
        'bio': 'Terrells bio',
        'image': 'String'
      };

      db.User.create(user3, function(err, succ) {
        console.log(succ);
      });

      // <% if (users == true) { %>
      // <li><a href="/user/<%= users._id %>">Profile</a></li>
      // <li><a href="/logout">Log Out</a></li>
      // <% } else { %>
      //   <li><a href="/signup">Sign Up</a></li>
      //   <li><a href="/login">Log In</a></li>
      //   <% } %>
