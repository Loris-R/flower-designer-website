Rails.application.routes.draw do
  root to: "pages#home"

  resources :contacts, only: %i(create)

  get "votre-evenement", to: "quotings#new"
  resources :quotings, only: :create

  get "contact", to: "messages#new"
  resources :messages, only: :create

  get 'performances', to: 'pages#performances'
  get 'murs', to: 'pages#murs'
  get 'cours', to: 'pages#cours'
  get 'atelier', to: 'pages#atelier'
end
