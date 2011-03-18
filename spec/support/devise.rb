module ControllerMacros
  def login!(user = :user)
    before(:each) do
      @current_user = Fabricate(user)
      sign_in @current_user
    end
  end
end

RSpec.configure do |config|
  config.include Devise::TestHelpers, :type => :controller
  config.extend ControllerMacros, :type => :controller
end