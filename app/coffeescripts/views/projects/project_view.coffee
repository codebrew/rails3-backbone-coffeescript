App.Views.Projects ||= {}

class App.Views.Projects.ProjectView extends Backbone.View
  template: ->
    return JST["project"]
  
  events:
    "click .destroy" : "destroy"
      
  tagName: "tr"
  
  destroy: () ->
    @options.model.destroy()
    this.remove()
    
    return false
    
  render: ->
    $(this.el).html(this.template()(this.options.model.toJSON() ))    
    return this