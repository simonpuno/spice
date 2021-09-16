class Api::BusinessesController < ApplicationController

    def index 
        # @businesses = Business.includes(:reviews, :types).with_attached_photos.all 

        if params[:biz_type] == ""
            @businesses = Business.includes(:reviews, :types)
                            .with_attached_photos.all
            render :index
        elsif params[:biz_type] 
            @businesses = Business.includes(:reviews, :types)
                            .with_attached_photos.all.by_type(params[:biz_type][0].upcase + params[:biz_type][1..-1]) # 
            render :index 
        else 
            @businesses = Business.includes(:reviews, :types)
                            .with_attached_photos.all
            render :index
        end
                            
    end

    def show 
        @business = Business.includes(:reviews, :review_authors, :types).with_attached_photos.find_by(id: params[:id])
        render :show 
    end
end
