class QuotingsController < ApplicationController
  def new
    @quoting = Quoting.new
  end

  def create
    @quoting = Quoting.new(quoting_params)

    if @quoting.save!
      redirect_to root_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def quoting_params
    params.require(:quoting).permit(:contact_id, :address, :zipcode, :city, :event_date)
  end
end
