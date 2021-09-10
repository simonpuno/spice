json.extract! @business, :id, :biz_name, :address, :type_id, :city_id, :hours
json.photoUrls @business.photos.map { |file| url_for(file) }

json.reviews do 
    @business.reviews.each do |review|
        json.set! review.id do 
            json.id review.id
            json.content review.content 
            json.rating review.rating 
            json.user_id review.user_id 
        end
    end
end

