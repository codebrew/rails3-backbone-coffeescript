/* DO NOT MODIFY. This file was compiled Fri, 18 Mar 2011 22:00:37 GMT from
 * /Users/fitz/Projects/rails3-backbone-coffeescript/app/coffeescripts/controllers/projects_controller.coffee
 */

(function() {
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  App.Controllers.ProjectsController = (function() {
    function ProjectsController() {
      ProjectsController.__super__.constructor.apply(this, arguments);
    }
    __extends(ProjectsController, Backbone.Controller);
    ProjectsController.prototype.initialize = function(options) {
      this.projects = new App.Collections.ProjectsCollection();
      return this.projects.refresh(options.projects);
    };
    ProjectsController.prototype.routes = {
      "/new": "newProject",
      "/index": "index",
      "/:id": "show",
      ".*": "index"
    };
    ProjectsController.prototype.newProject = function() {
      this.view = new App.Views.Projects.NewView({
        model: new this.projects.model()
      });
      return $("#projects").html(this.view.render().el);
    };
    ProjectsController.prototype.index = function() {
      this.view = new App.Views.Projects.IndexView({
        projects: this.projects
      });
      return $("#projects").html(this.view.render().el);
    };
    ProjectsController.prototype.show = function(id) {
      var project;
      project = this.projects.get(id);
      this.view = new App.Views.Projects.ShowView({
        model: project
      });
      return $("#projects").html(this.view.render().el);
    };
    return ProjectsController;
  })();
}).call(this);
