class Backbone.MongoModel extends Backbone.Model
  idAttribute: "_id"
  
  methodMap:
    'create': 'POST'
    'update': 'PUT'
    'delete': 'DELETE'
    'read'  : 'GET'
    
  getUrl: (object) ->
    if (!(object && object.url)) 
      return null
      
    if _.isFunction(object.url) then object.url() else object.url
    
  sync: (method, model, options) ->
    type = @methodMap[method];

    # Default JSON-request options.
    params = _.extend({
      type:         type,
      contentType:  'application/json',
      dataType:     'json',
      processData:  false
      }, options)

    if (!params.url)
      params.url = @getUrl(model)

    if (!params.data && model && (method == 'create' || method == 'update'))
      data = {}
      data[model.paramRoot] = model.toJSON()
      params.data = JSON.stringify(data)
      
    $.ajax(params)