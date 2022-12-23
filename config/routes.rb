Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'evenement', to: 'pages#evenement'
  get 'performances', to: 'pages#performances'
  get 'murs', to: 'pages#murs'
  get 'cours', to: 'pages#cours'
  get 'atelier', to: 'pages#atelier'
  get 'contact', to: 'pages#contact'
  # Defines the root path route ("/")
  # root "articles#index"
end
