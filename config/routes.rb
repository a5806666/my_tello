Rails.application.routes.draw do
  devise_for :users

  resources :cards, only: [:create, :update, :destroy] do
    member do
      put :move # cards/2/move
    end
  end

  resources :lists, only: [:index, :create, :update, :destroy] do 
    member do
      put :move # lists/2/move
    end
  end

  root 'lists#index'
end

