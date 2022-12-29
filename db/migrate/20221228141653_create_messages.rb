class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.references :contact, null: false, foreign_key: true
      t.text :message

      t.timestamps
    end
  end
end
