/* DO NOT MODIFY. This file was compiled Sat, 19 Mar 2011 01:57:57 GMT from
 * /Users/fitz/Projects/rails3-backbone-coffeescript/app/coffeescripts/views/projects/new_view.coffee
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
  App.Views.Projects.NewView = (function() {
    function NewView() {
      NewView.__super__.constructor.apply(this, arguments);
    }
    __extends(NewView, Backbone.View);
    NewView.prototype.template = function() {
      return JST["new"];
    };
    NewView.prototype.events = {
      "submit #project-form": "save"
    };
    NewView.prototype.save = function() {
      this.options.model.save();
      return false;
    };
    NewView.prototype.render = function() {
      $(this.el).html(this.template()(this.options.model.toJSON()));
      this.$("form").link(this.options.model);
      return this;
    };
    return NewView;
  })();
}).call(this);
