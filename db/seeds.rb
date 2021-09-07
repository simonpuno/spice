# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Business.destroy_all 
Review.destroy_all 
User.destroy_all 

u1 = User.create!({email: 'demo@user.com', password: 'password', first_name: 'Demo User', last_name: 'user', zip: 12345})
u2 = User.create!({email: 'demo2@user.com', password: 'password', first_name: 'Demo User2', last_name: 'user2', zip: 12345})
u3 = User.create!({email: 'demo3@user.com', password: 'password', first_name: 'Demo User3', last_name: 'user3', zip: 12345})

b1 = Business.create!(biz_name: 'biz1', type_id: 1, address: 1, city_id: 1, hours: 1)
b2 = Business.create!(biz_name: 'biz2', type_id: 1, address: 1, city_id: 1, hours: 1)
b3 = Business.create!(biz_name: 'biz3', type_id: 1, address: 1, city_id: 1, hours: 1)
b4 = Business.create!(biz_name: 'biz4', type_id: 1, address: 1, city_id: 1, hours: 1)

r1 = Review.create!(content: 'Great place!', rating: 5, user_id: 1, business_id: 1)
r1 = Review.create!(content: 'Decent place!', rating: 3, user_id: 2, business_id: 1)
r1 = Review.create!(content: 'Terrible place!', rating: 1, user_id: 3, business_id: 1)