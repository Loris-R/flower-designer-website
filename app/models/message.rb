class Message < ApplicationRecord
  belongs_to :contact
  accepts_nested_attributes_for :contact

  validates :content, presence: true
end
