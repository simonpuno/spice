class CreateCity < ActiveRecord::Migration[6.1]
  def change
    create_table :cities do |t|
      t.string :city, null: false 
      t.timestamps
    end

    add_index :cities, :city, unique: true 
  end
end
