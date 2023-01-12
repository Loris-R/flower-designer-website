class ApplicationMailer < ActionMailer::Base
  default from: "loris.reynaud@gmail.com"
  # default from: "contact@alicia-bussereau.com"
  layout "mailer"
end
