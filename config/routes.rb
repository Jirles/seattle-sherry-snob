Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do 
    get '/sherries' => 'data#index'
    get '/sherries/:id' => 'data#show'
    get '/default-image' => 'data#default_image'
    post '/sherries' => 'data#create_sherries'
    post '/sherries/:id/comments' => 'data#create_comment'
  end 
end
