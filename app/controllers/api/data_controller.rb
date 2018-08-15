class Api::DataController < ApplicationController
    require 'byebug'

    def index 
        @sherries ||= Sherry.all
        render json: @sherries, status: 200
    end 

    def show
        @sherry ||= Sherry.find(params[:id])
        render json: @sherry, status: 200
    end 

    def default_image
        send_file 'public/images/default-image.jpg', type: 'image/png', disposition: 'inline'
    end

    def create_sherries
        Sherry.create_or_find_from_json(params[:body][:results]) # probably not right
    end 

    def create_comment
        @comment = Comment.create(comment_params)
        render json: @comment, status: 201
    end 

    private 

    def comment_params
        params.require(:datum).permit(:sherry_id, :content)
    end 

end 