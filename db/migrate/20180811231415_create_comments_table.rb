class CreateCommentsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :comments_tables do |t|
      t.text :content
      t.integer :sherry_id
    end
  end
end
