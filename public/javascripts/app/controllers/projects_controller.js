/* DO NOT MODIFY. This file was compiled Fri, 18 Mar 2011 19:29:03 GMT from
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
      console.log(options);
      this.projects = new App.Collections.ProjectsCollection();
      return this.projects.refresh(options.projects);
    };
    ProjectsController.prototype.routes = {
      "/new": "newProject",
      ".*": "index"
    };
    ProjectsController.prototype.newProject = function() {
      return alert("new");
    };
    ProjectsController.prototype.index = function() {
      return alert("index");
    };
    return ProjectsController;
  })();
}).call(this);
