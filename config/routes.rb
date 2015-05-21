Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resources :todos
    resources :steps, only: [:create, :destroy, :update]
  end
end
