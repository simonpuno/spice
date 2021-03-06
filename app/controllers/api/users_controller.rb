class Api::UsersController < ApplicationController
# rails g controller api/users

    def create 
        @user = User.new(user_params)

        if @user.save 
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def user_params 
        params.require(:user).permit(:first_name, :last_name, :email, :zip, :birthday, :password)
    end

end
