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
u7 = User.create!({email: 'test7', password: 'password', first_name: 'Yoshi', last_name: 'Gser3', zip: 12345})
u8 = User.create!({email: 'test8', password: 'password', first_name: 'Wario', last_name: 'Hser3', zip: 12345})
u9 = User.create!({email: 'test9', password: 'password', first_name: 'Waluigi', last_name: 'Iser3', zip: 12345})
u10 = User.create!({email: 'test10', password: 'password', first_name: 'Goomba', last_name: 'Jser3', zip: 12345})
u11 = User.create!({email: 'test11', password: 'password', first_name: 'Donkey', last_name: 'Kser3', zip: 12345})
u12 = User.create!({email: 'test12', password: 'password', first_name: 'Koopa', last_name: 'Lser3', zip: 12345})

c1 = City.create!(city_name: 'Chicago')

t1 = Type.create!(biz_type: 'Mexican')
t2 = Type.create!(biz_type: 'Tacos')
t3 = Type.create!(biz_type: 'Sushi')
t4 = Type.create!(biz_type: 'Japanese')
t5 = Type.create!(biz_type: 'Ramen')
t6 = Type.create!(biz_type: 'Lunch')
t7 = Type.create!(biz_type: 'Dinner')

b1 = Business.create!(biz_name: 'Taco Hut', type_id: 1, address: '932 N Rush St, Chicago, IL 60611', city_id: c1.id, hours: '11:00 AM - 8:00 PM', lat: 41.900187, lng: -87.627733, description: "A family-owned Mexican restaurant. We will treat you as if you're having breakfast/lunch/dinner at our home and give you a great experience. Once you try our tacos you will continue to think about them all day and every day and will want to come back for more. We're always striving for the best; therefore, should we need to improve in any area, please give us your feedback! Specialties include our tacos de carne asada, rajas con queso, al pastor and our famous chile relleno dinner!")
b2 = Business.create!(biz_name: 'Burrito Palace', type_id: 1, address: '510 W Fullerton Pkwy, Chicago, IL 60614', city_id: c1.id, hours: '8:00 AM - 9:00 PM', lat: 41.925573, lng: -87.642064, description: "Our mission is to serve quality dishes in our awesome dining space inspired by modern Mexican-American culture. Our flavorful meals are served-up quickly by our hardworking chefs so you can savor your time at the most popular Mexican restaurant in town!")
b3 = Business.create!(biz_name: 'Margarita Mansion', type_id: 1, address: '550 W Monroe St, Chicago, IL 60661', city_id: c1.id, hours: '10:30 AM - 10:00 PM', lat: 41.880575, lng: -87.641892, description: "From Vegetarian and Vegan options, to burritos that come with avocados and sour cream standard, you won’t find more flavor to savor anywhere in Chicago.")
b4 = Business.create!(biz_name: 'Birria Barn', type_id: 1, address: '54 W Lake St, Chicago, IL 60601', city_id: c1.id, hours: '7:30 AM - 2:00 PM', lat: 41.885432, lng: -87.629547, description: "Specializing in fresh produce and quality meats. The best steak tacos in town! Come in on Tuesdays from 2 to 6 for a free taco!")
b5 = Business.create!(biz_name: 'Quesadilla Village', type_id: 1, address: '799 S Dearborn St, Chicago, IL 60605', city_id: c1.id, hours: '2:00 PM - 1:00 AM', lat: 41.872932, lng: -87.629175, description: "Colorful family-owned Mexican eatery known for its pambazos (sandwiches).")

b1t1 = BusinessType.create!(business_id: b1.id, type_id: t1.id)
b1t2 = BusinessType.create!(business_id: b1.id, type_id: t2.id)
b1t6 = BusinessType.create!(business_id: b1.id, type_id: t6.id)
b2t1 = BusinessType.create!(business_id: b2.id, type_id: t1.id)
b3t1 = BusinessType.create!(business_id: b3.id, type_id: t1.id)
b3t2 = BusinessType.create!(business_id: b3.id, type_id: t2.id)
b3t7 = BusinessType.create!(business_id: b3.id, type_id: t7.id)
b4t1 = BusinessType.create!(business_id: b4.id, type_id: t1.id)
b4t2 = BusinessType.create!(business_id: b4.id, type_id: t2.id)
b4t6 = BusinessType.create!(business_id: b4.id, type_id: t6.id)
b5t1 = BusinessType.create!(business_id: b5.id, type_id: t1.id)
b5t2 = BusinessType.create!(business_id: b5.id, type_id: t2.id)

s1 = Business.create!(biz_name: 'Sushi Kai', type_id: 1, city_id: c1.id, hours: '10:30 AM - 10:00 PM', address: '318 W Grand Ave, Chicago, IL 60654', lat: 41.891587, lng: -87.636333, description: "A Japanese inspired restaurant in Chicago. We respect Japanese tradition, but with a taste of our own creativity and art.")
s2 = Business.create!(biz_name: 'Sumo Ramen and Sushi', type_id: 1, city_id: c1.id, hours: '11:30 AM - 9:00 PM', address: '874 N Clark St, Chicago, IL 60610', lat: 41.898852, lng: -87.631299, description: "Customers can state their personal taste preferences upon arrival and then take delight in the individualized maki and sushi creations. A true new way to do your traditional Omakase style meal.")
s3 = Business.create!(biz_name: 'Osaka Japanese', type_id: 1, city_id: c1.id, hours: '2:30 PM - 11:00 PM', address: '20 S Clark St, Chicago, IL 60602', lat: 41.881209, lng: -87.630935, description: "Osaka offers Omakase, or leaving it to the chef. Each omakase varies with the selection of fish that is flown in directly from Japan on a weekly basis. The meal can be likened to an artistic performance by the chef with each presented dish.")
s4 = Business.create!(biz_name: 'Wasabi House', type_id: 1, city_id: c1.id, hours: '11:00 AM - 10:00 PM', address: '25 E Jackson Blvd, Chicago, IL 60604', lat: 41.878290, lng: -87.626814, description: "A Japanese inspired restaurant in Chicago. We respect Japanese tradition, but with a taste of our own creativity and art.")
s5 = Business.create!(biz_name: 'Little Tokyo', type_id: 1, city_id: c1.id, hours: '10:00 AM - 9:30 PM', address: '550 W Jackson Blvd, Chicago, IL 60661', lat: 41.878139, lng: -87.641944, description: "Customers can state their personal taste preferences upon arrival and then take delight in the individualized maki and sushi creations. A true new way to do your traditional Omakase style meal.")

s1t3 = BusinessType.create!(business_id: s1.id, type_id: t3.id)
s1t4 = BusinessType.create!(business_id: s1.id, type_id: t4.id)
s1t7 = BusinessType.create!(business_id: s1.id, type_id: t7.id)
s2t3 = BusinessType.create!(business_id: s2.id, type_id: t3.id)
s2t4 = BusinessType.create!(business_id: s2.id, type_id: t4.id)
s2t5 = BusinessType.create!(business_id: s2.id, type_id: t5.id) # ramen
s3t3 = BusinessType.create!(business_id: s3.id, type_id: t3.id)
s3t4 = BusinessType.create!(business_id: s3.id, type_id: t4.id)
s3t6 = BusinessType.create!(business_id: s3.id, type_id: t6.id)
s4t3 = BusinessType.create!(business_id: s4.id, type_id: t3.id)
s4t4 = BusinessType.create!(business_id: s4.id, type_id: t4.id)
s4t5 = BusinessType.create!(business_id: s4.id, type_id: t5.id) #ramen
s5t3 = BusinessType.create!(business_id: s5.id, type_id: t3.id)
s5t4 = BusinessType.create!(business_id: s5.id, type_id: t4.id)
s5t7 = BusinessType.create!(business_id: s5.id, type_id: t7.id)

# 'After Naan Delight'

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

sushirolls = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/sushirolls.jpg')
sushiboat = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/sushiboat.jpg')
ngiri = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/ngiri.jpg')
s1.photos.attach(io: sushirolls, filename: 'sushirolls.jpg')
s1.photos.attach(io: sushiboat, filename: 'sushiboat.jpg')
s1.photos.attach(io: ngiri, filename: 'ngiri.jpg')

ramen1 = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/ramen1.jpg')
threerolls = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/3rolls.jpg')
sushispread = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/sushispread.jpg')
s2.photos.attach(io: ramen1, filename: 'ramen1.jpg')
s2.photos.attach(io: threerolls, filename: 'threerolls.jpg')
s2.photos.attach(io: sushispread, filename: 'sushispread.jpg')

sushispread2 = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/sushispread2.jpg')
sushitable = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/sushitable.jpg')
katsu = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/katsu.jpg')
s3.photos.attach(io: sushispread2, filename: 'sushispread2.jpg')
s3.photos.attach(io: sushitable, filename: 'sushitable.jpg')
s3.photos.attach(io: katsu, filename: 'katsu.jpg')

sushirolls4 = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/sushirolls4.jpg')
ramen2 = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/ramen2.jpg')
ngiri2 = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/ngiri2.jpg')
s4.photos.attach(io: sushirolls4, filename: 'sushirolls4.jpg')
s4.photos.attach(io: ramen2, filename: 'ramen2.jpg')
s4.photos.attach(io: ngiri2, filename: 'ngiri2.jpg')

sushiplatter = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/sushiplatter.jpg')
sushirolls3 = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/sushirolls3.jpg')
sushirolls2 = URI.open('https://spice-aa-seeds.s3.us-east-2.amazonaws.com/sushi/sushisrolls2.jpg')
s5.photos.attach(io: sushiplatter, filename: 'sushiplatter.jpg')
s5.photos.attach(io: sushirolls3, filename: 'sushirolls3.jpg')
s5.photos.attach(io: sushirolls2, filename: 'sushirolls2.jpg')

b1u1 = Review.create!(content: 'Great place! I was blown away by the tacos here. Definitely worth a visit.', rating: 5, user_id: u1.id, business_id: b1.id)
b1u2 = Review.create!(content: 'Decent place. Nothing to write home about. I really liked their guacamole. The prices are fair, and the staff is very nice.', rating: 3, user_id: u2.id, business_id: b1.id)
b1u3 = Review.create!(content: 'Terrible place! I will never come back here. They messed up my order.', rating: 1, user_id: u3.id, business_id: b1.id)
b1u4 = Review.create!(content: 'Spicy food. The hot sauce has a great kick, and the margaritas are strong. I love this restaurant!', rating: 5, user_id: u4.id, business_id: b1.id)
b1u5 = Review.create!(content: 'This place was alright. I thought the tacos were just okay. There could have been more seasoning in the meat and they are pretty stingy on the portions.', rating: 3, user_id: u5.id, business_id: b1.id)

b2u1 = Review.create!(content: 'Tasty stuff! I will definitely come back. Try the tacos al pastor- they are the best in the world', rating: 5, user_id: u1.id, business_id: b2.id)
b2u2 = Review.create!(content: 'Very decent food! No complaints. I would come back again if I was in the area.', rating: 3, user_id: u2.id, business_id: b2.id)
b2u3 = Review.create!(content: 'I got food poisoning here!', rating: 1, user_id: u3.id, business_id: b2.id)
b2u4 = Review.create!(content: "The tacos were fresh and the adobada was the star. If you do the taco and not the house you get to avoid the cheese, but I bet you may say otherwise.", rating: 5, user_id: u4.id, business_id: b2.id)
b2u5 = Review.create!(content: "I found the tacos to be generally kind of bland and definitely a gut bomb. I had to dump a lot of the salsa on the taco to start to enjoy it.", rating: 3, user_id: u5.id, business_id: b2.id)

b3u1 = Review.create!(content: 'Moments like this is when I wonder why I was born so small...I wish I had a bigger tummy to fit in more food, specifically these tacos.', rating: 5, user_id: u1.id, business_id: b3.id)
b3u2 = Review.create!(content: "At this place I got some tacos and a torta and felt they were fine. I wouldn't necessarily crave these tacos though, and maybe feel like making some at home would be the same or better. That being said, in no way is this place bad.", rating: 3, user_id: u2.id, business_id: b3.id)
b3u3 = Review.create!(content: 'Maybe I am just picky with Mexican Food but I was pretty disappointed :(.', rating: 1, user_id: u3.id, business_id: b3.id)
b3u4 = Review.create!(content: 'Such a nice wait staff!', rating: 5, user_id: u4.id, business_id: b3.id)
b3u5 = Review.create!(content: 'It was meh! I would maybe return, but I would not go out of my way to com back here again.', rating: 3, user_id: u5.id, business_id: b3.id)

b4u1 = Review.create!(content: "Solid taco place, they do al pastor tacos really well here- I've never been disappointed with my order.", rating: 5, user_id: u1.id, business_id: b4.id)
b4u2 = Review.create!(content: "I really liked the Birra tacos here they were fried really well but if you dont eat them quick they get soggy! The sauce was really delicious and overall I would probably order again.", rating: 3, user_id: u2.id, business_id: b4.id)
b4u3 = Review.create!(content: "Horrible customer service.  The cashier walked away from me so that she didn't have to take my order.", rating: 1, user_id: u3.id, business_id: b4.id)
b4u4 = Review.create!(content: 'Great value and very flavorful!', rating: 5, user_id: u4.id, business_id: b4.id)
b4u5 = Review.create!(content: 'Would probably come back.', rating: 3, user_id: u5.id, business_id: b4.id)

b5u1 = Review.create!(content: 'Best burrito in town 10/10 recommend I will never eat anywhere else after eating their burrito tacos and carne asada fries.', rating: 5, user_id: u1.id, business_id: b5.id)
b5u2 = Review.create!(content: 'The tacos were pretty good when it came to flavor. Overall the experience was good, not amazing but enough to peak interest into trying the other dishes on their menu.', rating: 3, user_id: u2.id, business_id: b5.id)

s1u1 = Review.create!(rating: 5, user_id: u1.id, business_id: s1.id, content: "My favorite roll was the Tuna Mango Roll we ordered 2 of these because they were sooo good. (5 pieces)  Also ordered the Angel hair roll which came with apple pieces and the Crazy Kani Roll. These two were practically identical but better to go with the Angel hair roll.")
s1u2 = Review.create!(rating: 4, user_id: u2.id, business_id: s1.id, content: "Super popular place, so usually a waitlist shorter on weekdays and much longer on weekends. No reservations, first come first serve and entirety of party must arrive in order to be seated.")
s1u3 = Review.create!(rating: 3, user_id: u3.id, business_id: s1.id, content: "Ordered a lot of starters, a deluxe roll and nigiris for take-away and was quite disappointed. The 'hot and crisp' starters were cold and soft, and the sushi was OK/good, but not great. The highlight was the miso soup...")
s1u4 = Review.create!(rating: 1, user_id: u4.id, business_id: s1.id, content: "The rolls were pretty small in comparison to other places I have gone. Spicy tuna was eh. Crazy Kani- was good but nothing to write home about.")
s1u5 = Review.create!(rating: 4, user_id: u5.id, business_id: s1.id, content: "The nigiri is absolutely delicious and you can get so many. Dishes come out quickly and the wait staff is really on top of bringing you water bottles.")
s1u6 = Review.create!(rating: 5, user_id: u6.id, business_id: s1.id, content: "Ordered a lot of sushi... Maybe a bit too much if I'm being honest ‍ The sushi was well-made but the rolls were very hefty and had a lot of rice in ratio to the toppings. Overall, recommend if you have a big stomach and can eat a lot! Fish was fresh and they have so much variety!")
s1u7 = Review.create!(rating: 4, user_id: u7.id, business_id: s1.id, content: "Our go-to sushi spot when my husband and I have a craving. This place always has a very long wait so be sure to call ahead and ask to join the waitlist.")
s1u8 = Review.create!(rating: 4, user_id: u8.id, business_id: s1.id, content: "We got a bunch of their speciality rolls, and a few of their appetizers. Our favorite of the appetizers was the crab Rangoon. We got the calamari, which was alright with hardly any calamari! I don't think we could pick a favorite of the rolls because they were all so good.")
s1u9 = Review.create!(rating: 4, user_id: u9.id, business_id: s1.id, content: "I'm giving this place 1 star because of cleanliness. The bathrooms are absolutely disgusting!!! I lost my appetite from how filthy it was. The tables and chairs are also so sticky.")

s2u2 = Review.create!(rating: 4, user_id: u2.id, business_id: s2.id, content: "Super popular place, so usually a waitlist shorter on weekdays and much longer on weekends. No reservations, first come first serve and entirety of party must arrive in order to be seated.")
s2u3 = Review.create!(rating: 3, user_id: u3.id, business_id: s2.id, content: "Ordered a lot of starters, a deluxe roll and nigiris for take-away and was quite disappointed. The 'hot and crisp' starters were cold and soft, and the sushi was OK/good, but not great. The highlight was the miso soup...")
s2u6 = Review.create!(rating: 5, user_id: u6.id, business_id: s2.id, content: "Ordered a lot of sushi... Maybe a bit too much if I'm being honest ‍ The sushi was well-made but the rolls were very hefty and had a lot of rice in ratio to the toppings. Overall, recommend if you have a big stomach and can eat a lot! Fish was fresh and they have so much variety!")
s1u8 = Review.create!(rating: 4, user_id: u8.id, business_id: s2.id, content: "We got a bunch of their speciality rolls, and a few of their appetizers. Our favorite of the appetizers was the crab Rangoon. We got the calamari, which was alright with hardly any calamari! I don't think we could pick a favorite of the rolls because they were all so good.")
s2u4 = Review.create!(rating: 1, user_id: u4.id, business_id: s2.id, content: "The rolls were pretty small in comparison to other places I have gone. Spicy tuna was eh. Crazy Kani- was good but nothing to write home about.")
s2u5 = Review.create!(rating: 4, user_id: u5.id, business_id: s2.id, content: "The nigiri is absolutely delicious and you can get so many. Dishes come out quickly and the wait staff is really on top of bringing you water bottles.")
s2u1 = Review.create!(rating: 5, user_id: u1.id, business_id: s2.id, content: "My favorite roll was the Tuna Mango Roll we ordered 2 of these because they were sooo good. (5 pieces)  Also ordered the Angel hair roll which came with apple pieces and the Crazy Kani Roll. These two were practically identical but better to go with the Angel hair roll.")

s3u5 = Review.create!(rating: 4, user_id: u5.id, business_id: s3.id, content: "The nigiri is absolutely delicious and you can get so many. Dishes come out quickly and the wait staff is really on top of bringing you water bottles.")
s3u1 = Review.create!(rating: 5, user_id: u1.id, business_id: s3.id, content: "My favorite roll was the Tuna Mango Roll we ordered 2 of these because they were sooo good. (5 pieces)  Also ordered the Angel hair roll which came with apple pieces and the Crazy Kani Roll. These two were practically identical but better to go with the Angel hair roll.")
s1u9 = Review.create!(rating: 4, user_id: u9.id, business_id: s3.id, content: "I'm giving this place 1 star because of cleanliness. The bathrooms are absolutely disgusting!!! I lost my appetite from how filthy it was. The tables and chairs are also so sticky.")
s3u3 = Review.create!(rating: 3, user_id: u3.id, business_id: s3.id, content: "Ordered a lot of starters, a deluxe roll and nigiris for take-away and was quite disappointed. The 'hot and crisp' starters were cold and soft, and the sushi was OK/good, but not great. The highlight was the miso soup...")
s3u2 = Review.create!(rating: 4, user_id: u2.id, business_id: s3.id, content: "Super popular place, so usually a waitlist shorter on weekdays and much longer on weekends. No reservations, first come first serve and entirety of party must arrive in order to be seated.")
s3u4 = Review.create!(rating: 1, user_id: u4.id, business_id: s3.id, content: "The rolls were pretty small in comparison to other places I have gone. Spicy tuna was eh. Crazy Kani- was good but nothing to write home about.")
s3u6 = Review.create!(rating: 5, user_id: u6.id, business_id: s3.id, content: "Ordered a lot of sushi... Maybe a bit too much if I'm being honest ‍ The sushi was well-made but the rolls were very hefty and had a lot of rice in ratio to the toppings. Overall, recommend if you have a big stomach and can eat a lot! Fish was fresh and they have so much variety!")

s4u6 = Review.create!(rating: 5, user_id: u6.id, business_id: s4.id, content: "Ordered a lot of sushi... Maybe a bit too much if I'm being honest ‍ The sushi was well-made but the rolls were very hefty and had a lot of rice in ratio to the toppings. Overall, recommend if you have a big stomach and can eat a lot! Fish was fresh and they have so much variety!")
s4u2 = Review.create!(rating: 4, user_id: u2.id, business_id: s4.id, content: "Super popular place, so usually a waitlist shorter on weekdays and much longer on weekends. No reservations, first come first serve and entirety of party must arrive in order to be seated.")
s4u4 = Review.create!(rating: 1, user_id: u4.id, business_id: s4.id, content: "The rolls were pretty small in comparison to other places I have gone. Spicy tuna was eh. Crazy Kani- was good but nothing to write home about.")
s4u3 = Review.create!(rating: 3, user_id: u3.id, business_id: s4.id, content: "Ordered a lot of starters, a deluxe roll and nigiris for take-away and was quite disappointed. The 'hot and crisp' starters were cold and soft, and the sushi was OK/good, but not great. The highlight was the miso soup...")
s4u5 = Review.create!(rating: 4, user_id: u5.id, business_id: s4.id, content: "The nigiri is absolutely delicious and you can get so many. Dishes come out quickly and the wait staff is really on top of bringing you water bottles.")
s4u1 = Review.create!(rating: 5, user_id: u1.id, business_id: s4.id, content: "My favorite roll was the Tuna Mango Roll we ordered 2 of these because they were sooo good. (5 pieces)  Also ordered the Angel hair roll which came with apple pieces and the Crazy Kani Roll. These two were practically identical but better to go with the Angel hair roll.")
s1u7 = Review.create!(rating: 4, user_id: u7.id, business_id: s4.id, content: "Our go-to sushi spot when my husband and I have a craving. This place always has a very long wait so be sure to call ahead and ask to join the waitlist.")

s5u4 = Review.create!(rating: 1, user_id: u4.id, business_id: s5.id, content: "The rolls were pretty small in comparison to other places I have gone. Spicy tuna was eh. Crazy Kani- was good but nothing to write home about.")
s5u6 = Review.create!(rating: 5, user_id: u6.id, business_id: s5.id, content: "Ordered a lot of sushi... Maybe a bit too much if I'm being honest ‍ The sushi was well-made but the rolls were very hefty and had a lot of rice in ratio to the toppings. Overall, recommend if you have a big stomach and can eat a lot! Fish was fresh and they have so much variety!")
s5u2 = Review.create!(rating: 4, user_id: u2.id, business_id: s5.id, content: "Super popular place, so usually a waitlist shorter on weekdays and much longer on weekends. No reservations, first come first serve and entirety of party must arrive in order to be seated.")
s5u1 = Review.create!(rating: 5, user_id: u1.id, business_id: s5.id, content: "My favorite roll was the Tuna Mango Roll we ordered 2 of these because they were sooo good. (5 pieces)  Also ordered the Angel hair roll which came with apple pieces and the Crazy Kani Roll. These two were practically identical but better to go with the Angel hair roll.")
s1u8 = Review.create!(rating: 4, user_id: u8.id, business_id: s5.id, content: "We got a bunch of their speciality rolls, and a few of their appetizers. Our favorite of the appetizers was the crab Rangoon. We got the calamari, which was alright with hardly any calamari! I don't think we could pick a favorite of the rolls because they were all so good.")
