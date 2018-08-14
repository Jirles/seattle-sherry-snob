class AddImageAndThumbnailColumnsToSherries < ActiveRecord::Migration[5.2]
  def change
    add_column :sherries, :image_url, :text
    add_column :sherries, :thumbnail_url, :text 
  end
end
