# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Business.destroy_all 
Review.destroy_all 
User.destroy_all 

u1 = User.create!({email: 'demo@user.com', password: 'password', first_name: 'Demo User', last_name: 'user', zip: 12345})
u2 = User.create!({email: 'demo2@user.com', password: 'password', first_name: 'Demo User2', last_name: 'user2', zip: 12345})
u3 = User.create!({email: 'demo3@user.com', password: 'password', first_name: 'Demo User3', last_name: 'user3', zip: 12345})
u4 = User.create!({email: 'test4', password: 'password', first_name: 'Demo User4', last_name: 'user3', zip: 12345})
u5 = User.create!({email: 'test5', password: 'password', first_name: 'Demo User5', last_name: 'user3', zip: 12345})
u6 = User.create!({email: 'test6', password: 'password', first_name: 'Demo User6', last_name: 'user3', zip: 12345})

b1 = Business.create!(biz_name: 'Taco Hut', type_id: 1, address: '123 Main St.', city_id: 1, hours: '11:00 AM - 8:00 PM')
b2 = Business.create!(biz_name: 'Burrito Palace', type_id: 1, address: '456 Oak St.', city_id: 1, hours: '8:00 AM - 9:00 PM')
b3 = Business.create!(biz_name: 'Margarita Mansion', type_id: 1, address: '246 Lake St.', city_id: 1, hours: '10:30 AM - 10:00 PM')
b4 = Business.create!(biz_name: 'Birria Barn', type_id: 1, address: '135 Broadway Ave.', city_id: 1, hours: '7:30 AM - 2:00 PM')
b5 = Business.create!(biz_name: 'Quesadilla Village', type_id: 1, address: '789 Clark St.', city_id: 1, hours: '2:00 PM - 1:00 AM')

burrito = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/burrito.jpeg')
birria = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/birria.jpg')
margarita = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/margarita.jpg')
b1.photos.attach(io: burrito, filename: 'burrito.jpeg')
b1.photos.attach(io: birria, filename: 'birria.jpg')
b1.photos.attach(io: margarita, filename: 'margarita.jpg')

moretacos = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/moretacos.png')
foodspread = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/foodspread.png')
burritorice = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/burritorice.jpg')
b2.photos.attach(io: moretacos, filename: 'moretacos.png')
b2.photos.attach(io: foodspread, filename: 'foodspread.png')
b2.photos.attach(io: burritorice, filename: 'burritorice.jpg')

nachos = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/nachos.jpg')
morebirria = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/morebirria.jpg')
beersmargs = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/beersmargs.jpg')
b3.photos.attach(io: nachos, filename: 'nachos.jpg')
b3.photos.attach(io: morebirria, filename: 'morebirria.jpg')
b3.photos.attach(io: beersmargs, filename: 'beersmargs.jpg')

food = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/food.jpg')
evenmoretacos = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/evenmoretacos.jpg')
tacobowl = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/tacobowl.jpg')
b4.photos.attach(io: food, filename: 'food.jpg')
b4.photos.attach(io: evenmoretacos, filename: 'evenmoretacos.jpg')
b4.photos.attach(io: tacobowl, filename: 'tacobowl.jpg')

lottatacos = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/lottatacos.jpg')
fajitas = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/fajitas.jpg')
tacos = open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/tacos.png')
b5.photos.attach(io: lottatacos, filename: 'lottatacos.jpg')
b5.photos.attach(io: fajitas, filename: 'fajitas.jpg')
b5.photos.attach(io: tacos, filename: 'tacos.png')

b1r1 = Review.create!(content: 'Great place!', rating: 5, user_id: 1, business_id: 1)
b1r2 = Review.create!(content: 'Decent place!', rating: 3, user_id: 2, business_id: 1)
b1r3 = Review.create!(content: 'Terrible place!', rating: 1, user_id: 3, business_id: 1)
b1r4 = Review.create!(content: 'Spicy place!', rating: 5, user_id: 4, business_id: 1)
b1r5 = Review.create!(content: 'Mild place!', rating: 3, user_id: 5, business_id: 1)

b2r1 = Review.create!(content: 'Tasty stuff!', rating: 5, user_id: 1, business_id: 2)
b2r2 = Review.create!(content: 'Very decent food!', rating: 3, user_id: 2, business_id: 2)
b2r3 = Review.create!(content: 'I got food poisoning here!', rating: 1, user_id: 3, business_id: 2)
b2r4 = Review.create!(content: 'Exceptional!', rating: 5, user_id: 4, business_id: 2)
b2r5 = Review.create!(content: 'Very mediocre!', rating: 3, user_id: 5, business_id: 2)

b3r1 = Review.create!(content: 'Very nice place!', rating: 5, user_id: 1, business_id: 3)
b3r2 = Review.create!(content: 'Overpriced, but good!', rating: 3, user_id: 2, business_id: 3)
b3r3 = Review.create!(content: 'Horrible restaurant!', rating: 1, user_id: 3, business_id: 3)
b3r4 = Review.create!(content: 'Such a nice wait staff!', rating: 5, user_id: 4, business_id: 3)
b3r5 = Review.create!(content: 'It was meh!', rating: 3, user_id: 5, business_id: 3)

b4r1 = Review.create!(content: 'WOW SO GOOD!', rating: 5, user_id: 1, business_id: 4)
b4r2 = Review.create!(content: 'Was not blown away.', rating: 3, user_id: 2, business_id: 4)
b4r3 = Review.create!(content: 'Never coming back!', rating: 1, user_id: 3, business_id: 4)
b4r4 = Review.create!(content: 'Great value and very flavorful!', rating: 5, user_id: 4, business_id: 4)
b4r5 = Review.create!(content: 'Would probably come back.', rating: 3, user_id: 5, business_id: 4)

b5r1 = Review.create!(content: 'Amazing spot!', rating: 5, user_id: 1, business_id: 5)
b5r2 = Review.create!(content: 'The drinks are good!', rating: 3, user_id: 2, business_id: 5)