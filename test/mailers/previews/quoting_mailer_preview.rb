# Preview all emails at http://localhost:3000/rails/mailers/quoting_mailer
class QuotingMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/quoting_mailer/incoming
  def incoming
    QuotingMailer.with(quoting: Quoting.last, contact: Quoting.last.contact).incoming
  end
    
  # Preview this email at http://localhost:3000/rails/mailers/quoting_mailer/thanks
  def thanks
    QuotingMailer.with(quoting: Quoting.last, contact: Quoting.last.contact).thanks
  end
end
