/* DO NOT MODIFY. This file was compiled Sat, 19 Mar 2011 03:25:10 GMT from
 * /Users/fitz/Projects/rails3-backbone-coffeescript/app/coffeescripts/views/projects/index_view.coffee
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
  App.Views.Projects.IndexView = (function() {
    function IndexView() {
      IndexView.__super__.constructor.apply(this, arguments);
    }
    __extends(IndexView, Backbone.View);
    IndexView.prototype.template = function() {
      return JST["index"];
    };
    IndexView.prototype.initialize = function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');
      return this.options.projects.bind('refresh', this.addAll);
    };
    IndexView.prototype.addAll = function() {
      return this.options.projects.each(this.addOne);
    };
    IndexView.prototype.addOne = function(project) {
      var pv;
      pv = new App.Views.Projects.ProjectView({
        model: project
      });
      return this.$("#projects-table tbody").append(pv.render().el);
    };
    IndexView.prototype.render = function() {
      $(this.el).html(this.template()({
        projects: this.options.projects.toJSON()
      }));
      this.addAll();
      return this;
    };
    return IndexView;
  })();
}).call(this);
