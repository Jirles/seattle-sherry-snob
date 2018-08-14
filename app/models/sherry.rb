class Sherry < ActiveRecord::Base
    has_many :comments

    DEFAULT_IMAGE = '../../public/images/default-image.jpg'
    DEFAULT_THUMBNAIL = '../../public/images/default-thumbnail.jpeg'

    def convert_price(price)
        price.to_f / 100
    end 

    def self.create_or_find_from_json(json)
        json.each do |result|
            unless Sherry.find_by(lcbo_id: result.id)
                sherry = self.new do |s|
                    s.lcbo_id = result.id
                    s.name = result.name
                    s.price = convert_price(result.price_in_cents)
                    s.origin = result.origin
                    s.package = result.package 
                    s.sugar_content = result.sugar_content 
                    s.producer = result.producer_name
                    s.tasting_note = result.tasting_note
                    s.image_url = DEFAULT_IMAGE unless result.image_url
                    s.thumbnail_url = DEFAULT_THUMBNAIL unless result.image_thumb_url
                end 
                sherry.save
            end 
        end 
    end 

end 