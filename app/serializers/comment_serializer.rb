class CommentSerializer < ActiveModel::Serializer 
    attributes :id, :sherry_id, :content
    belongs_to :sherry
end 