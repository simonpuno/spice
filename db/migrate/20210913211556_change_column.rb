class ChangeColumn < ActiveRecord::Migration[6.1]
  def change

    rename_column :types, :type, :biz_type
  end
end
