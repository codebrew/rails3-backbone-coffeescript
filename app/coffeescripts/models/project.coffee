class App.Models.Project extends Backbone.MongoModel
  url: '/projects'
  paramRoot: "project"
  
class App.Collections.ProjectsCollection extends Backbone.Collection
  model: App.Models.Project
  url: '/projects'
  