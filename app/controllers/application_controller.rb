class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  respond_to :json, :html

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

    def configure_permitted_parameters
          devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:role, :email, :password, :password_confirmation, :first_name, :second_name) }
          devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:role, :email, :password, :password_confirmation, :current_password, :first_name, :second_name) }
      end
end
