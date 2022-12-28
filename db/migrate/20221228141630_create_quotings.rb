class CreateQuotings < ActiveRecord::Migration[7.0]
  def change
    create_table :quotings do |t|
      t.references :contact, null: false, foreign_key: true
      t.string :address
      t.string :zipcode
      t.string :city
      t.date :event_date
      t.string :category

      t.timestamps
    end
  end
end
