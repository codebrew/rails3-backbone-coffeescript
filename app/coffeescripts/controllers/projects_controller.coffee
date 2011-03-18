class App.Controllers.ProjectsController extends Backbone.Controller
  initialize: (options) ->
    @projects = new App.Collections.ProjectsCollection()
    @projects.refresh options.projects
    
  routes:
    "/new": "newProject"
    "/index": "index"
    "/:id": "show"
    ".*": "index"
    
  newProject: ->
    @view = new App.Views.Projects.NewView(model: new @projects.model())
    $("#projects").html(@view.render().el)
    
  index: ->
    @view = new App.Views.Projects.IndexView(projects: @projects)
    $("#projects").html(@view.render().el)
    
  show:(id) ->
    project = @projects.get(id)
    @view = new App.Views.Projects.ShowView(model:project)
    $("#projects").html(@view.render().el)