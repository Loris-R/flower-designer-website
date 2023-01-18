ActionMailer::Base.smtp_settings = {
  address: ENV['SMTP_SERVER'],
  port: ENV['SMTP_PORT'],
  user_name: ENV['SMTP_USER_NAME'],
  password: ENV['SMTP_PASSWORD'],
  authentication: :plain,
  enable_starttls_auto: true
}