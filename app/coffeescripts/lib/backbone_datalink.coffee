(($) ->
  $.extend($.fn,
    backboneLink: (model) ->  
      $(this).find(":input").each(() ->
        el = $(this)        
        name = el.attr("name")
      
        model.bind("change:#{name}", () ->
          el.val(model.get(name))
        )
      
        $(this).bind("change", () ->
          el = $(this)
          attrs = {}
          attrs[el.attr("name")] = el.val()
        
          model.set(attrs)
        )
      )
  )
)(jQuery)
