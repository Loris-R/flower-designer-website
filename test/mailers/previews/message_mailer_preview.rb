# Preview all emails at http://localhost:3000/rails/mailers/message_mailer
class MessageMailerPreview < ActionMailer::Preview
  # Preview this email at http://localhost:3000/rails/mailers/message_mailer/incoming
  def incoming
    MessageMailer.with(message: Message.last, contact: Message.last.contact).incoming
  end

  # Preview this email at http://localhost:3000/rails/mailers/message_mailer/thanks
  def thanks
    MessageMailer.with(message: Message.last, contact: Message.last.contact).thanks
  end
end
