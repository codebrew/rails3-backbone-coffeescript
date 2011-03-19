App.Views.Projects ||= {}

class App.Views.Projects.IndexView extends Backbone.View
  template: ->
    return JST["index"]
    
  initialize: () ->
    _.bindAll(this, 'addOne', 'addAll', 'render');
    
    @options.projects.bind('refresh', this.addAll);
   
  addAll: () ->
    @options.projects.each(this.addOne)
  
  addOne: (project) ->
    pv = new App.Views.Projects.ProjectView({model : project})
    this.$("#projects-table tbody").append(pv.render().el)
       
  render: ->
    $(this.el).html(this.template()(projects: this.options.projects.toJSON() ))
    @addAll()
    
    return this
