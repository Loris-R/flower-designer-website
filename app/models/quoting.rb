class Quoting < ApplicationRecord
  belongs_to :user

  validates :address, :zipcode, :city, :event_date, :category, presence: true
end
