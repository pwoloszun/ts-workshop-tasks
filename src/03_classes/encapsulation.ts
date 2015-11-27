
/*
 * new Admin(params) class:
 * Public properties:
 * + uuid (generated using private static property NEXT_UUID)
 * Private properties:
 * - login
 * - password
 * Public methods:
 * + getLogin()
 * + setLogin(value)
 * + getEncodedPassword()
 * Private methods:
 * - encodePassword(passwd) (encoded using private static property ENCODING_STR)
 * Private static properties:
 * - NEXT_UUID
 * - ENCODING_KEY
 * Private static methods:
 * - generateUuid() (generates next uniq UUID)
 * */
function adminTest() {
  var login : string = "Bob";
  var passwd : string = "#secret!";

  //TODO: introduce interface for admin params
  var admin = new Admin({
    login: login,
    password: passwd
  });

  console.assert(admin.uuid == 0);
  console.assert(admin.getLogin() == login);
  login = "kate";
  admin.setLogin(login);
  console.assert(admin.getLogin() == login);
  console.assert(admin.getEncodedPassword() == passwd + "imba!");
  console.log("adminTest passed");
}

//adminTest();
