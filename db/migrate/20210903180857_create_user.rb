class CreateUser < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name, null: false 
      t.string :last_name, null: false 
      t.string :email, null: false
      t.integer :zip, null: false
      t.date :birthday 
      t.string :password_digest
      t.string :session_token

      t.timestamps
    end

    add_index :users, :email, unique: true 
    add_index :users, :session_token
  end
end
