# Preview all emails at http://localhost:3000/rails/mailers/quoting_mailer
class QuotingMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/quoting_mailer/incoming
  def incoming
    QuotingMailer.incoming
  end

end
