class Comment < ActiveRecord::Base
    belongs_to :sherry
    validates :sherry_id, :content, presence: true

end 