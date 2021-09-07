class Api::ReviewsController < ApplicationController

    def create 
        @review = Review.new(review_params)

        if @review.save 
            render :create
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def update
        @review = Review.find_by(id: params[:id])

        if @review.update(review_params)
            render :update 
        else
            render json: @review.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy 
        @review = Review.find_by(id: params[:id])
        @review.destroy 
        render json: {}
    end

    def review_params 
        params.require(:review).permit(:content, :rating, :user_id, :business_id)
    end

end
