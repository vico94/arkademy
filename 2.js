   function is_username_valid(username) {
        var regex = new RegExp ("^[a-zA-Z]{6}$")
        var isValid = regex_1.test(username);
        if (username.length === 6) {
          if (isValid) {
              return false;
          } else {
              return true;
          }
        } else {
          return false;
        }
    }




function is_password_valid(password) {
    var regex = new RegExp ("^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\])(?=.{8,10}) (^[7].)")
    var isValid = regex.test(password);
      if (isValid) {
          return true;
      } else {
          return false;
      }
}
