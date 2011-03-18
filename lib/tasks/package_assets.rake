require 'jammit'
require 'compass'
require 'compass/exec'

namespace :package_assets do
  
  desc "package asssets with jammit"
  task :package do
    puts "compiling scss..."
    project = Compass::Commands::UpdateProject.new(Rails.root.to_s, :quiet => false, :force => true)
    project.perform
    
    puts "compiling coffeescripts..."
    Rake::Task["barista:brew"].invoke
    
    puts "packaging assets...."
    Jammit.package!
    puts "finished packaging assets"
  end
  
end

task :package_assets => ["package_assets:package"]