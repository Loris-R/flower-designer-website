class Contact < ApplicationRecord
  has_many :quotings

  validates :first_name, :last_name, :email, presence: true
  validates :email, format: { with: /^[a-zA-Z0-9_-]+\.?[a-zA-Z0-9]+@{1}[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)?\.[a-z]{2,}+$/ }
  validates :phone_number, format: { with: /^(0|\+33\s?|0033)1-79$/ }
end
