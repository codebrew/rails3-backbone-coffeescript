/* DO NOT MODIFY. This file was compiled Fri, 18 Mar 2011 18:49:54 GMT from
 * /Users/fitz/Projects/rails3-backbone-coffeescript/app/coffeescripts/lib/mongo_model.coffee
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
  Backbone.MongoModel = (function() {
    function MongoModel() {
      MongoModel.__super__.constructor.apply(this, arguments);
    }
    __extends(MongoModel, Backbone.Model);
    MongoModel.prototype.idAttribute = "_id";
    return MongoModel;
  })();
}).call(this);
