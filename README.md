# Rails3-backbone-coffeescript

This is an example rails 3 app built with [backbone.js][backbone_js], [coffeescript][coffeescript] and [mongoDB][mongodb] (using mongoid)

## Help and Info

To follow the development of this app, follow us on Twitter:
[http://twitter.com/codebrewstudios](http://twitter.com/codebrewstudios).

If you need any projects built using this stack feel free to contact us at [services@codebrewstudios.com](mailto:services@codebrewstudios.com)

## Dependencies
1. Ruby 1.9.2
2. Rails 3
3. [Coffeescript][coffeescript] 1.0
4. [mongoDB](http://www.mongodb.org) (any recent stable version should work, we use 1.8)

Using [rvm][rvm] is recommended

## Project layout

The most interesting part of the project exists inside the app/coffeescripts folder.
Its broken down into 4 main parts

1. lib - javascript library files to use through out the application
2. Controllers dir - this is where our backbone controllers live
3. Model dir - this is where backbone models and collections are defined
4. Views - backbone views (widgets)
5. templates - handlebar.js templates to be used by our backbone views

[backbone_js]: http://documentcloud.github.com/backbone     "backbone.js"
[coffeescript]: http://jashkenas.github.com/coffee-script   "coffeescript"
[mongodb]: http://www.mongodb.org                           "mongodb"
[rvm]: http://rvm.beginrescueend.com                        "rvm"