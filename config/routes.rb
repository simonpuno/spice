Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resource :session, only: [:create, :destroy]

    resources :users, only: [:create]

    resources :businesses, only: [:index, :show]

    resources :reviews, only: [:create, :destroy, :update, :show]

  end
end
