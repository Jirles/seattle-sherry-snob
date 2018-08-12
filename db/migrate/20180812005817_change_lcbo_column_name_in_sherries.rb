class ChangeLcboColumnNameInSherries < ActiveRecord::Migration[5.2]
  def change
    rename_column :sherries, :lcbo, :lcbo_id
  end
end
