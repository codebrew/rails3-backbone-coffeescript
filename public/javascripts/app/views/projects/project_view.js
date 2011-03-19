/* DO NOT MODIFY. This file was compiled Sat, 19 Mar 2011 03:25:50 GMT from
 * /Users/fitz/Projects/rails3-backbone-coffeescript/app/coffeescripts/views/projects/project_view.coffee
 */

(function() {
  var _base;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  (_base = App.Views).Projects || (_base.Projects = {});
  App.Views.Projects.ProjectView = (function() {
    function ProjectView() {
      ProjectView.__super__.constructor.apply(this, arguments);
    }
    __extends(ProjectView, Backbone.View);
    ProjectView.prototype.template = function() {
      return JST["project"];
    };
    ProjectView.prototype.events = {
      "click .destroy": "destroy"
    };
    ProjectView.prototype.tagName = "tr";
    ProjectView.prototype.destroy = function() {
      this.options.model.destroy();
      this.remove();
      return false;
    };
    ProjectView.prototype.render = function() {
      $(this.el).html(this.template()(this.options.model.toJSON()));
      return this;
    };
    return ProjectView;
  })();
}).call(this);
