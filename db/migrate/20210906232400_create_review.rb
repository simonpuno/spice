class CreateReview < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :content, null: false 
      t.integer :rating, null: false 
      t.integer :user_id, null: false 
      t.integer :business_id, null: false 

      t.timestamps
    end

    add_index :reviews, [:user_id, :business_id], unique: true
  end
end
