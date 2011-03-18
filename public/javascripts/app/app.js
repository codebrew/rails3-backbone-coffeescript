/* DO NOT MODIFY. This file was compiled Fri, 18 Mar 2011 18:55:23 GMT from
 * /Users/fitz/Projects/rails3-backbone-coffeescript/app/coffeescripts/app.coffee
 */

(function() {
  window.App = {
    Models: {},
    Collections: {},
    Controllers: {},
    Views: {},
    currentUser: function(user) {
      if (user) {
        return this.user = new App.Models.User(user);
      } else {
        return this.user;
      }
    }
  };
}).call(this);
