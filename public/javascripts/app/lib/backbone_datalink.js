/* DO NOT MODIFY. This file was compiled Tue, 05 Apr 2011 21:28:03 GMT from
 * /Users/fitz/Projects/rails3-backbone-coffeescript/app/coffeescripts/lib/backbone_datalink.coffee
 */

(function() {
  (function($) {
    return $.extend($.fn, {
      backboneLink: function(model) {
        return $(this).find(":input").each(function() {
          var el, name;
          el = $(this);
          name = el.attr("name");
          model.bind("change:" + name, function() {
            return el.val(model.get(name));
          });
          return $(this).bind("change", function() {
            var attrs;
            el = $(this);
            attrs = {};
            attrs[el.attr("name")] = el.val();
            return model.set(attrs);
          });
        });
      }
    });
  })(jQuery);
}).call(this);
