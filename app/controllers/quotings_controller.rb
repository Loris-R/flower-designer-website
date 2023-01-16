class QuotingsController < ApplicationController
  def new
    @quoting = Quoting.new
    @quoting.build_contact
  end

  def create
    @quoting = Quoting.new(quoting_params)
    contact = Contact.find_or_create_by(email: params[:quoting][:contact_attributes][:email]) do |contact|
      contact.first_name = params[:quoting][:contact_attributes][:first_name]
      contact.last_name = params[:quoting][:contact_attributes][:last_name]
      contact.city = params[:quoting][:contact_attributes][:city] if params[:quoting][:contact_attributes][:city]
      contact.phone_number = params[:quoting][:contact_attributes][:phone_number] if params[:quoting][:contact_attributes][:phone_number]
    end
    
    @quoting.contact = contact

    if @quoting.save!
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def quoting_params
    params.require(:quoting).permit(:address, :zipcode, :city, :event_date, categories: [], 
      contact_attributes: [:first_name, :last_name, :email, :phone_number, :city])
  end
end
