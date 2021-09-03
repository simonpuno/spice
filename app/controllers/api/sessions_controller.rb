class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil? 
            render json: ['Invalid credentials'], status: 401
        else
            login(@user)
            render 'api/users/show';
        end
    end

    def destroy 
        if !logged_in?
            render json: ['Not logged in'], status: 404
        end
        logout 
        render json: {}
    end

end
