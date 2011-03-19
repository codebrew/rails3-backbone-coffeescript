App.Views.Projects ||= {}

class App.Views.Projects.NewView extends Backbone.View
  template: ->
    return JST["new"]
   
  events:
    "submit #project-form": "save"
    
  save: ->
    @options.model.save()
    return false
    
  render: ->
    $(this.el).html(this.template()(this.options.model.toJSON() ))
    this.$("form").link(@options.model)
    
    return this