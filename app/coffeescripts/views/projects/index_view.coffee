App.Views.Projects ||= {}

class App.Views.Projects.IndexView extends Backbone.View
  template: ->
    return JST["index"]
   
  render: ->
    $(this.el).html(this.template()(projects: this.options.projects.toJSON() ))    
    return this
