class Api::ImageController < ApplicationController

    def default_image
        send_file 'public/images/default-image.jpg', type: 'image/png', disposition: 'inline'
    end

    def sherry_types
        send_file 'public/images/sherry_types.jpg', type: 'image/png', disposition: 'inline'
    end 

    def palomino_grapes
        send_file 'public/images/palomino_grapes.jpg', type: 'image/png', disposition: 'inline'
    end 

    def flor
        send_file 'public/images/flor.jpg', type: 'image/png', disposition: 'inline'
    end 

end 