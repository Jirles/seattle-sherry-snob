class ChangePriceInSherriesToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :sherries, :price, :float
  end
end
