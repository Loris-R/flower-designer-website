Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'evenement', to: 'pages#evenement'
  get 'contact', to: 'pages#contact'
  # Defines the root path route ("/")
  # root "articles#index"
end
