class SherrySerializer < ActiveModel::Serializer 
    attributes :id, :lcbo_id, :name, :price, :origin, :package, :sugar_content, :producer, :tasting_note
    has_many :comments
end 