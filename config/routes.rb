Rails.application.routes.draw do
  resources :comments
  resources :tasks
  resources :projects
  root 'projects#index'
  post '/add_developer_project', to: 'projects#add_developer'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
