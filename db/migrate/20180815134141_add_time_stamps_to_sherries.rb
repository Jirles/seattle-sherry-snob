class AddTimeStampsToSherries < ActiveRecord::Migration[5.2]
  def change
    add_timestamps(:sherries, null: true)
    #backfilling timestamps so i can change null constraints to NOT NULL
    long_ago = DateTime.new(2000, 1, 1)
    Sherry.update_all(created_at: long_ago, updated_at: long_ago)

    
    change_column_null :sherries, :created_at, false
    change_column_null :sherries, :updated_at, false
  end
end
