class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :first_names
      t.string :last_names
      t.string :phone_number
      t.string :email
      t.string :city

      t.timestamps
    end
  end
end
