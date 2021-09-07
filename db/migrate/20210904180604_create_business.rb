class CreateBusiness < ActiveRecord::Migration[6.1]
  def change
    create_table :businesses do |t|
      t.string :biz_name, null: false 
      t.integer :type_id, null: false
      t.string :address, null: false 
      t.integer :city_id, null: false 
      t.integer :zip_code
      t.string :hours, null: false 
      t.text :description
      t.float :lat 
      t.float :lng

      t.timestamps
    end

    add_index :businesses, :type_id
    add_index :businesses, :city_id
  end
end
