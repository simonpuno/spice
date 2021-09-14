class Api::BusinessesController < ApplicationController

    def index 
        @businesses = Business.includes(:reviews, :types).with_attached_photos.all 
        render :index 
    end

    def show 
        @business = Business.includes(:reviews, :review_authors, :types).with_attached_photos.find_by(id: params[:id])
        render :show 
    end
end
