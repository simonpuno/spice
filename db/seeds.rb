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
City.destroy_all 
Type.destroy_all
BusinessType.destroy_all

u1 = User.create!({email: 'demo@user.com', password: 'password', first_name: 'Mario', last_name: 'Aser', zip: 12345})
u2 = User.create!({email: 'demo2@user.com', password: 'password', first_name: 'Luigi', last_name: 'Bser2', zip: 12345})
u3 = User.create!({email: 'demo3@user.com', password: 'password', first_name: 'Bowser', last_name: 'Cser3', zip: 12345})
u4 = User.create!({email: 'test4', password: 'password', first_name: 'Peach', last_name: 'Dser3', zip: 12345})
u5 = User.create!({email: 'test5', password: 'password', first_name: 'Toad', last_name: 'Eser3', zip: 12345})
u6 = User.create!({email: 'test6', password: 'password', first_name: 'Daisy', last_name: 'Fser3', zip: 12345})

c1 = City.create!(city_name: 'Chicago')

t1 = Type.create!(biz_type: 'Mexican')
t2 = Type.create!(biz_type: 'Tacos')

b1 = Business.create!(biz_name: 'Taco Hut', type_id: 1, address: ' 932 N Rush St, Chicago, IL 60611', city_id: c1.id, hours: '11:00 AM - 8:00 PM', lat: 41.900187, lng: -87.627733, description: "A family-owned Mexican restaurant. We will treat you as if you're having breakfast/lunch/dinner at our home and give you a great experience. Once you try our tacos you will continue to think about them all day and every day and will want to come back for more. We're always striving for the best; therefore, should we need to improve in any area, please give us your feedback! Specialties include our tacos de carne asada, rajas con queso, al pastor and our famous chile relleno dinner!")
b2 = Business.create!(biz_name: 'Burrito Palace', type_id: 1, address: '510 W Fullerton Pkwy, Chicago, IL 60614', city_id: c1.id, hours: '8:00 AM - 9:00 PM', lat: 41.925573, lng: -87.642064, description: "Our mission is to serve quality dishes in our awesome dining space inspired by modern Mexican-American culture. Our flavorful meals are served-up quickly by our hardworking chefs so you can savor your time at the most popular Mexican restaurant in town!")
b3 = Business.create!(biz_name: 'Margarita Mansion', type_id: 1, address: '550 W Monroe St, Chicago, IL 60661', city_id: c1.id, hours: '10:30 AM - 10:00 PM', lat: 41.880575, lng: -87.641892, description: "From Vegetarian and Vegan options, to burritos that come with avocados and sour cream standard, you won’t find more flavor to savor anywhere in Chicago.")
b4 = Business.create!(biz_name: 'Birria Barn', type_id: 1, address: '54 W Lake St, Chicago, IL 60601', city_id: c1.id, hours: '7:30 AM - 2:00 PM', lat: 41.885432, lng: -87.629547, description: "Specializing in fresh produce and quality meats. The best steak tacos in town! Come in on Tuesdays from 2 to 6 for a free taco!")
b5 = Business.create!(biz_name: 'Quesadilla Village', type_id: 1, address: '799 S Dearborn St, Chicago, IL 60605', city_id: c1.id, hours: '2:00 PM - 1:00 AM', lat: 41.872932, lng: -87.629175, description: "Colorful family-owned Mexican eatery known for its pambazos (sandwiches).")

b1t1 = BusinessType.create!(business_id: b1.id, type_id: t1.id)
b1t2 = BusinessType.create!(business_id: b1.id, type_id: t2.id)
b2t1 = BusinessType.create!(business_id: b2.id, type_id: t1.id)
b3t1 = BusinessType.create!(business_id: b3.id, type_id: t1.id)
b3t2 = BusinessType.create!(business_id: b3.id, type_id: t2.id)
b4t1 = BusinessType.create!(business_id: b4.id, type_id: t1.id)
b4t2 = BusinessType.create!(business_id: b4.id, type_id: t2.id)
b5t1 = BusinessType.create!(business_id: b5.id, type_id: t1.id)
b5t2 = BusinessType.create!(business_id: b5.id, type_id: t2.id)


burrito = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/burrito.jpeg')
birria = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/birria.jpg')
margarita = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/margarita.jpg')
b1.photos.attach(io: burrito, filename: 'burrito.jpeg')
b1.photos.attach(io: birria, filename: 'birria.jpg')
b1.photos.attach(io: margarita, filename: 'margarita.jpg')

moretacos = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/moretacos.png')
foodspread = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/foodspread.png')
burritorice = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/burritorice.jpg')
b2.photos.attach(io: moretacos, filename: 'moretacos.png')
b2.photos.attach(io: foodspread, filename: 'foodspread.png')
b2.photos.attach(io: burritorice, filename: 'burritorice.jpg')

nachos = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/nachos.jpg')
morebirria = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/morebirria.jpg')
beersmargs = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/beersmargs.jpg')
b3.photos.attach(io: nachos, filename: 'nachos.jpg')
b3.photos.attach(io: morebirria, filename: 'morebirria.jpg')
b3.photos.attach(io: beersmargs, filename: 'beersmargs.jpg')

food = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/food.jpg')
evenmoretacos = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/evenmoretacos.jpg')
tacobowl = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/tacobowl.jpg')
b4.photos.attach(io: food, filename: 'food.jpg')
b4.photos.attach(io: evenmoretacos, filename: 'evenmoretacos.jpg')
b4.photos.attach(io: tacobowl, filename: 'tacobowl.jpg')

lottatacos = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/lottatacos.jpg')
fajitas = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/fajitas.jpg')
tacos = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/tacos.png')
b5.photos.attach(io: lottatacos, filename: 'lottatacos.jpg')
b5.photos.attach(io: fajitas, filename: 'fajitas.jpg')
b5.photos.attach(io: tacos, filename: 'tacos.png')

b1r1 = Review.create!(content: 'Great place! I was blown away by the tacos here. Definitely worth a visit.', rating: 5, user_id: u1.id, business_id: b1.id)
b1r2 = Review.create!(content: 'Decent place. Nothing to write home about. I really liked their guacamole. The prices are fair, and the staff is very nice.', rating: 3, user_id: u2.id, business_id: b1.id)
b1r3 = Review.create!(content: 'Terrible place! I will never come back here. They messed up my order.', rating: 1, user_id: u3.id, business_id: b1.id)
b1r4 = Review.create!(content: 'Spicy food. The hot sauce has a great kick, and the margaritas are strong. I love this restaurant!', rating: 5, user_id: u4.id, business_id: b1.id)
b1r5 = Review.create!(content: 'This place was alright. I thought the tacos were just okay. There could have been more seasoning in the meat and they are pretty stingy on the portions.', rating: 3, user_id: u5.id, business_id: b1.id)

b2r1 = Review.create!(content: 'Tasty stuff! I will definitely come back. Try the tacos al pastor- they are the best in the world', rating: 5, user_id: u1.id, business_id: b2.id)
b2r2 = Review.create!(content: 'Very decent food! No complaints. I would come back again if I was in the area.', rating: 3, user_id: u2.id, business_id: b2.id)
b2r3 = Review.create!(content: 'I got food poisoning here!', rating: 1, user_id: u3.id, business_id: b2.id)
b2r4 = Review.create!(content: "The tacos were fresh and the adobada was the star. If you do the taco and not the house you get to avoid the cheese, but I bet you may say otherwise.", rating: 5, user_id: u4.id, business_id: b2.id)
b2r5 = Review.create!(content: "I found the tacos to be generally kind of bland and definitely a gut bomb. I had to dump a lot of the salsa on the taco to start to enjoy it.", rating: 3, user_id: u5.id, business_id: b2.id)

b3r1 = Review.create!(content: 'Moments like this is when I wonder why I was born so small...I wish I had a bigger tummy to fit in more food, specifically these tacos.', rating: 5, user_id: u1.id, business_id: b3.id)
b3r2 = Review.create!(content: "At this place I got some tacos and a torta and felt they were fine. I wouldn't necessarily crave these tacos though, and maybe feel like making some at home would be the same or better. That being said, in no way is this place bad.", rating: 3, user_id: u2.id, business_id: b3.id)
b3r3 = Review.create!(content: 'Maybe I am just picky with Mexican Food but I was pretty disappointed :(.', rating: 1, user_id: u3.id, business_id: b3.id)
b3r4 = Review.create!(content: 'Such a nice wait staff!', rating: 5, user_id: u4.id, business_id: b3.id)
b3r5 = Review.create!(content: 'It was meh! I would maybe return, but I would not go out of my way to com back here again.', rating: 3, user_id: u5.id, business_id: b3.id)

b4r1 = Review.create!(content: "Solid taco place, they do al pastor tacos really well here- I've never been disappointed with my order.", rating: 5, user_id: u1.id, business_id: b4.id)
b4r2 = Review.create!(content: "I really liked the Birra tacos here they were fried really well but if you dont eat them quick they get soggy! The sauce was really delicious and overall I would probably order again.", rating: 3, user_id: u2.id, business_id: b4.id)
b4r3 = Review.create!(content: "Horrible customer service.  The cashier walked away from me so that she didn't have to take my order.", rating: 1, user_id: u3.id, business_id: b4.id)
b4r4 = Review.create!(content: 'Great value and very flavorful!', rating: 5, user_id: u4.id, business_id: b4.id)
b4r5 = Review.create!(content: 'Would probably come back.', rating: 3, user_id: u5.id, business_id: b4.id)

b5r1 = Review.create!(content: 'Best burrito in town 10/10 recommend I will never eat anywhere else after eating their burrito tacos and carne asada fries.', rating: 5, user_id: u1.id, business_id: b5.id)
b5r2 = Review.create!(content: 'The tacos were pretty good when it came to flavor. Overall the experience was good, not amazing but enough to peak interest into trying the other dishes on their menu.', rating: 3, user_id: u2.id, business_id: b5.id)