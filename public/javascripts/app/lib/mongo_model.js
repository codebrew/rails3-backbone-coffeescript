/* DO NOT MODIFY. This file was compiled Sat, 19 Mar 2011 03:23:31 GMT from
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
    MongoModel.prototype.methodMap = {
      'create': 'POST',
      'update': 'PUT',
      'delete': 'DELETE',
      'read': 'GET'
    };
    MongoModel.prototype.getUrl = function(object) {
      if (!(object && object.url)) {
        return null;
      }
      if (_.isFunction(object.url)) {
        return object.url();
      } else {
        return object.url;
      }
    };
    MongoModel.prototype.sync = function(method, model, options) {
      var data, params, type;
      type = this.methodMap[method];
      params = _.extend({
        type: type,
        contentType: 'application/json',
        dataType: 'json',
        processData: false
      }, options);
      if (!params.url) {
        params.url = this.getUrl(model);
      }
      if (!params.data && model && (method === 'create' || method === 'update')) {
        data = {};
        data[model.paramRoot] = model.toJSON();
        params.data = JSON.stringify(data);
      }
      return $.ajax(params);
    };
    return MongoModel;
  })();
}).call(this);
