class Api::DataController < ApplicationController

    def index 
        @sherries ||= Sherry.all
        render json: @sherries, status: 200
    end 

    def show
        @sherry ||= Sherry.find(params[:id])
        render json: @sherry, status: 200
    end 

    def create_sherries
        Sherry.create_or_find_from_json(params[:body][:results]) # probably not right
        redirect_to api_sherries_path
    end 

    def create_comment
        @comment = Comment.create(comment_params)
        render json: @comment, status: 201
    end 

    private 

    def comment_params(params)
        params.permit(:wine_id, :content)
    end 

end 