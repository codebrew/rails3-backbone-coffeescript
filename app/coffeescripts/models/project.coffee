class App.Models.Project extends Backbone.MongoModel
  idAttribute: "_id"
  
class App.Collections.ProjectsCollection extends Backbone.Collection
  model: App.Models.Project
  url: '/projects'