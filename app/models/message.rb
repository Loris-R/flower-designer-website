class Message < ApplicationRecord
  after_create :send_incoming_mail

  belongs_to :contact
  accepts_nested_attributes_for :contact

  validates :content, presence: true

  private

  def send_incoming_mail
    MessageMailer.with(message: self).incoming.deliver_now
  end
end
