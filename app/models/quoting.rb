class Quoting < ApplicationRecord
  belongs_to :contact
  accepts_nested_attributes_for :contact

  validates :address, :zipcode, :city, :event_date, :category, presence: true

  CATEGORIES = %w(Mariage Cortège Mairie Lieux\ religieux Cérémonie\ Laïque Salle\ de\ réception Livraison/Démontage Baby\ shower Demande\ en\ mariage Anniversaire Fête\ religieuse Séminaire Repas\ professionnel Autre)
end
