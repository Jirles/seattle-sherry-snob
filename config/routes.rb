Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do 
    get '/sherries' => 'data#index'
    get '/sherries/:id' => 'data#show'
    post '/sherries' => 'data#create_sherries'
    post '/comments' => 'data#create_comment'
    get '/default-image' => 'image#default_image'
    get '/sherry-types-image' => 'image#sherry_types'
    get '/palomino-grapes-image' => 'image#palomino_grapes'
    get '/flor-image' => 'image#flor'
    get '/banner-image' => 'image#banner'
  end 
end
