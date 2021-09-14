class ChangeColumnCity < ActiveRecord::Migration[6.1]
  def change
    rename_column :cities, :city, :city_name
  end
end
