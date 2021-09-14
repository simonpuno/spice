json.extract! @business, :id, :biz_name, :address, :city_id, :hours, :description, :types, :lat, :lng

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
            @business.review_authors.each do |author|
                if review.user_id === author.id 
                    json.author_first_name author.first_name
                    json.author_last_init author.last_name[0]
                end
            end
        end
    end
end

rating = (sum / @business.reviews.length) + 1

json.aveRating rating

