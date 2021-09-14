@businesses.each do |biz|
    rating = 0
    sum = 0
    biz.reviews.each do |rev|
        sum += rev.rating
    end
    rating = (sum / biz.reviews.length) + 1
    json.set! biz.id do 
        json.extract! biz, :id, :biz_name
        json.photoUrl url_for(biz.photos[0])
        json.review biz.reviews[0].content
        json.numReviews biz.reviews.length 
        json.rating rating
        json.lat biz.lat 
        json.lng biz.lng
        # biz.types.each do |type_obj|
        #     type_obj.type_name 
        # end
        json.types biz.types   
    end
end