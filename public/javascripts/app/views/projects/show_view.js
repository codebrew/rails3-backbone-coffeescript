/* DO NOT MODIFY. This file was compiled Sat, 19 Mar 2011 03:25:10 GMT from
 * /Users/fitz/Projects/rails3-backbone-coffeescript/app/coffeescripts/views/projects/show_view.coffee
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
  App.Views.Projects.ShowView = (function() {
    function ShowView() {
      ShowView.__super__.constructor.apply(this, arguments);
    }
    __extends(ShowView, Backbone.View);
    ShowView.prototype.template = function() {
      return JST["show"];
    };
    ShowView.prototype.render = function() {
      $(this.el).html(this.template()(this.options.model.toJSON()));
      return this;
    };
    return ShowView;
  })();
}).call(this);
