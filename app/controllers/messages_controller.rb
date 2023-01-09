class MessagesController < ApplicationController
  def new
    @message = Message.new
    @message.build_contact
  end

  def create
    @message = Message.new(message_params)
    contact = Contact.find_or_create_by!(email: params[:message][:contact_attributes][:email].downcase) do |contact|
      contact.first_name = params[:message][:contact_attributes][:first_name]
      contact.last_name = params[:message][:contact_attributes][:last_name]
      contact.phone_number = params[:message][:contact_attributes][:phone_number] if params[:message][:contact_attributes][:phone_number].to_i != nil
    end    

    @message.contact = contact

    if @message.save!
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:content, contact_attributes: [:first_name, :last_name, :email, :phone_number])
  end
end
