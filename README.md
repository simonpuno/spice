# Introduction

Link: [spice](https://spice-site.herokuapp.com/#/)

Welcome! spice is a Yelp clone with core features including: 
* User Authentication
* Search/filter businesses by category
* Create, read, update, and delete reviews
* Business map

# Technologies Used

* React/Redux Frontend
* Rails backend
* PostgreSQL Database
* Google Maps JavaScript API
* AWS S3 for image storage

# Key Functionality

## User Authentication
Users can enter basic information to create an account on spice that will persist between sessions. Passwords are encrypted using the bcrypt hashing function. By logging in, users can access additional site functionality, such as writing reviews. A demo user is provided so a user can still have full access to the site without entering any personal information. 

*Note: Current database constraints only allow a user to leave one review per business. In other words, a user cannot review the same business twice. If logging in as the demo user, keep in mind that the demo user may have reviews already written for that business, so feel free to edit or delete these prior reviews to play around with functionality!*

## Search
Users can utilize a search bar to filter business results by category. Results are displayed on a results page with accompanying location through the integrated Google Maps API. At the time of writing, spice has businesses in the *Mexican, Japanese, Lunch, Dinner, Tacos, Sushi, and Ramen* categories. Results are limited to Chicago, IL for now. 

## Reviews
Logged-in users have the ability to write, edit, and delete reviews. Users can only edit and delete their own reviews, and a user can only review each business one time. Business ratings are calculated in real-time based on an average of all user ratings for that business. 

# Future Functionality
* Add more businesses to the database to expand seearch terms and filters.
* Add additional cities.
* Create User Profiles, so users can see all the reviews they've written.
* Add profile photos for users that will show up next to their reviews. 
