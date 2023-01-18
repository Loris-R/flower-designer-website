class Quoting < ApplicationRecord
  after_create :send_incoming_quoting

  belongs_to :contact
  accepts_nested_attributes_for :contact

  validates :address, :zipcode, :city, :event_date, :categories, presence: true

  CATEGORIES = %w(Mariage Cortège Mairie Lieux\ religieux Cérémonie\ Laïque Salle\ de\ réception Livraison/Démontage Baby\ shower Demande\ en\ mariage Anniversaire Fête\ religieuse Séminaire Repas\ professionnel Autre)

  private

  def send_incoming_quoting
    QuotingMailer.with(quoting: self).incoming.deliver_now
  end
end
