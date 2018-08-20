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
        Sherry.create_or_find_from_json(sherry_params)
    end 

    def create_comment
        @comment = Comment.create(comment_params)
        render json: @comment, status: 201
    end 

    private 

    def comment_params
        params.require(:datum).permit(:sherry_id, :content)
    end 

    def sherry_params
        params.permit(result: [:id, :name, :price_in_cents, :origin, :package, :sugar_content, :producer_name, :tasting_note, :image_url, :image_thumb_url])
    end 

end 