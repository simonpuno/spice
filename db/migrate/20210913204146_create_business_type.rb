class CreateBusinessType < ActiveRecord::Migration[6.1]
  def change
    create_table :business_types do |t|
      t.integer :business_id, null: false 
      t.integer :type_id, null: false 

      t.timestamps
    end

    add_index :business_types, :business_id
    add_index :business_types, :type_id 
  end
end
