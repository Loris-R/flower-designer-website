require "test_helper"

class QuotingMailerTest < ActionMailer::TestCase
  test "incoming" do
    mail = QuotingMailer.incoming
    assert_equal "Incoming", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
