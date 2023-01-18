class QuotingMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.quoting_mailer.incoming.subject
  #
  def incoming
    @quoting = params[:quoting]
    @contact = @quoting.contact
    mail(to: "contact@alicia-bussereau.com", subject: "Nouvelle demande de devis")
  end
end
