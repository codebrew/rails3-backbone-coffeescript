class App.Controllers.ProjectsController extends Backbone.Controller
  initialize: (options) ->
    console.log options
    @projects = new App.Collections.ProjectsCollection()
    @projects.refresh options.projects
    
  routes:
    "/new": "newProject"
    ".*": "index"
    
  newProject: ->
    alert("new")
    
  index: ->
    alert("index")
    
  