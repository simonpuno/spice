class Api::BusinessesController < ApplicationController

    def index 
        @businesses = Business.all 
        render :index 
    end

    def show 
        @business = Business.includes(:reviews).find_by(id: params[:id])
        render :show 
    end
end
