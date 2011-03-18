/* DO NOT MODIFY. This file was compiled Fri, 18 Mar 2011 21:12:14 GMT from
 * /Users/fitz/Projects/rails3-backbone-coffeescript/app/coffeescripts/views/projects/index.coffee
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
  App.Views.Projects = {};
  App.Views.Projects.IndexView = (function() {
    function IndexView() {
      IndexView.__super__.constructor.apply(this, arguments);
    }
    __extends(IndexView, Backbone.View);
    IndexView.prototype.template = function() {
      return JST["index"];
    };
    IndexView.prototype.render = function() {
      $(this.el).html(this.template()({
        projects: this.options.projects.toJSON()
      }));
      return this;
    };
    return IndexView;
  })();
}).call(this);
