@businesses.each do |biz|
    json.set! biz.id do 
        json.extract! biz, :id, :biz_name 
    end
end