class CommentSerializer < ActiveModel::Serializer 
    attributes :id, :wine_id, :content
    belongs_to :sherry
end 