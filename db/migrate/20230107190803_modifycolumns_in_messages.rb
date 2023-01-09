class ModifycolumnsInMessages < ActiveRecord::Migration[7.0]
  def change
    rename_column :contacts, :first_names, :first_name
    rename_column :contacts, :last_names, :last_name
    rename_column :messages, :message, :content
  end
end
