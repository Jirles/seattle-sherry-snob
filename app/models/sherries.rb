class Sherry < ActiveRecord::Base
    has_many :comments

    def convert_price(price)
        price.to_f / 100
    end 

    def self.create_sherries_from_json(json)
        json.each do |result|
            sherry = self.new do |s|
                s.lcbo_id = result.id
                s.name = result.name
                s.price = convert_price(result.price_in_cents)
                s.origin = result.origin
                s.package = result.package 
                s.sugar_content = result.sugar_content 
                s.producer = result.producer_name
                s.tasting_note = result.tasting_note
            end 
            sherry.save
        end 
    end 

end 