window.App =
  Models: {}
  Controllers: {}
  Views: {}

  currentUser: (user) ->
    if user
      @user = new App.Models.User(user)
    else
      return @user