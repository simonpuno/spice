class Api::BusinessesController < ApplicationController

    def index 
        # @businesses = Business.includes(:reviews, :types).with_attached_photos.all 
        # debugger
        @businesses = Business.includes(:reviews, :types).with_attached_photos.all.by_type(params[:biz_type][0].upcase + params[:biz_type][1..-1]) # 
        render :index 
    end

    def show 
        @business = Business.includes(:reviews, :review_authors, :types).with_attached_photos.find_by(id: params[:id])
        render :show 
    end
end
