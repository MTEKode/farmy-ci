Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    get 'git_branches', to: 'git#fetch_branches'
  end

  root 'home#catch'
  get '*path', to: 'home#catch'
end
