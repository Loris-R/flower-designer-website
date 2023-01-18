class MessageMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.incoming.subject
  #
  def incoming
    @message = params[:message]
    @contact = @message.contact
    mail(to: "contact@alicia-bussereau.com", subject: "Nouveau message - formulaire de contact")
  end
end
