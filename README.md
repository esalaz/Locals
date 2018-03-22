# The Team
 Terrell Tullis - https://github.com/t-tullis
 
 Erik Salazar - https://github.com/esalaz
 
 Hunter Cote - https://github.com/hcote

# Locals
Our app is meant for the person who's planning a visit to a new city, but wants an authentic experience of the city, now go to crowded tourist trap after crowded tourist trap. Maybe this person is short on time and can't research their destination city too much (and if we're being honest, some of the best local hangouts aren't easily searchable online). Or maybe this person wants to explore a new city with the help of someone more familiar with the area. This is the traveler.

But our app isn't complete without a local to show you around. The local is an extravert who wants to be active and be outside while also meeting new and interesting people. Maybe their friends are away for the weekend and they want to go on their favorite hike, BBQ house, or bar.

In comes Locals.

Sign up or log in, find the area you'll be visiting, scan through the locals that are in that area. Look at their profile and bio, and if you think they would be a good match, message, schedule and book them!

# Heroku Link
https://shrouded-wildwood-81473.herokuapp.com
(Seed data doesn't populate, issue with images as well)

# Technologies Used
## Back End
MongoDB, Node, Express

## Front End
jQuery, Materialize

# Challenges and Triumphs
Feeding multiple succes callback function results to the same .ejs files. Each time we would get one link working (to edit your profile, view your profile, or view the profile of another user), another would break. Since everything was connected through our server.js, there was little room for error to ensure that all pages were fully CRUD-able.
Populating the map with markers using the database.

# Future Developments
Allow for messaging between local and traveler

Review system for both locals and travelers after their time together

Pagination on feed.ejs

Profile image uploading

Full responsiveness

## Cited Sources
https://jqueryui.com/datepicker/
