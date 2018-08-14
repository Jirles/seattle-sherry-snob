class SherrySerializer < ActiveModel::Serializer 
    attributes :id, :lcbo_id, :name, :price, :origin, :package, :sugar_content, :producer, :tasting_note, :image_url, :thumbnail_url
    has_many :comments
end 