# Load the rails application
require File.expand_path('../application', __FILE__)
require 'yaml'
YAML::ENGINE.yamler= 'syck'


# Initialize the rails application
Rails3BackboneCoffeescript::Application.initialize!
