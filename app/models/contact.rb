class Contact < ApplicationRecord
  has_many :quotings
  has_many :messages

  validates :first_name, :last_name, :email, presence: true
  validates :email, format: { with: /\A[a-zA-Z0-9_-]+\.?[a-zA-Z0-9]+@{1}[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)?\.[a-z]{2,}+\z/ }
  validates :phone_number, format: { with: /\A((0033|\+33|0)\d)((\s?\d{2}){4})\z/ }
end
