json.extract! @business, :id, :biz_name, :address, :type_id, :city_id, :hours

# rating = 0
# sum = 0
# biz.reviews.each do |rev|
#     sum += rev.rating
# end
# rating = (sum / biz.reviews.length) + 1


json.photoUrls @business.photos.map { |file| url_for(file) }

sum = 0 
json.reviews do 
    @business.reviews.each do |review|
        sum += review.rating
        json.set! review.id do 
            json.id review.id
            json.content review.content 
            json.rating review.rating 
            json.user_id review.user_id 
        end
    end
end

rating = (sum / @business.reviews.length) + 1

json.aveRating rating

