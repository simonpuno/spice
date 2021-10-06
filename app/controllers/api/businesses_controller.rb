class Api::BusinessesController < ApplicationController

    def index 
        # @businesses = Business.includes(:reviews, :types).with_attached_photos.all 

        categories = [
                    'Mexican', 
                    'Tacos', 
                    'Sushi', 
                    'Japanese', 
                    'Ramen',
                    'Lunch',
                    'Dinner'
                    ]

        if params[:biz_type] == ""
            @businesses = Business.includes(:reviews, :types)
                            .with_attached_photos.all
            render :index
        elsif categories.include?(params[:biz_type][0].upcase + params[:biz_type][1..-1].downcase)
            @businesses = Business.includes(:reviews, :types)
                            .with_attached_photos.all.by_type(params[:biz_type][0].upcase + params[:biz_type][1..-1].downcase) # 
            render :index 
        # else 
        #     @businesses = Business.includes(:reviews, :types)
        #                     .with_attached_photos.all
        #     render :index
        end
                            
    end

    def show 
        @business = Business.includes(:reviews, :review_authors, :types).with_attached_photos.find_by(id: params[:id])
        render :show 
    end
end
