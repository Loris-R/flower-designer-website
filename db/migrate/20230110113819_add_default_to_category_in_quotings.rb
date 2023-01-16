class AddDefaultToCategoryInQuotings < ActiveRecord::Migration[7.0]
  def change
    remove_column :quotings, :category
    add_column :quotings, :categories, :string, array: true, default: []
  end
end
