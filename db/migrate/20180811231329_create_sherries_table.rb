class CreateSherriesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :sherries_tables do |t|
      t.integer :lcbo
      t.text :name
      t.integer :price
      t.text :origin
      t.text :package
      t.text :sugar_content
      t.text :producer
      t.text :tasting_note
    end
  end
end
