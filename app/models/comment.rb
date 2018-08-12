class Comment < ActiveRecord::Base
    belongs_to :sherry
    validates :wine_id, :content, presence: true

end 