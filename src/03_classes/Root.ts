/// <reference path="../01_basics/03_enums.ts" />

// TODO: implement Root class, which inherits from User

function testRoot() {
  var login = "ed";
  //TODO: reuse Permissions enum
  var perms = ["r", "w", "d", "u"];


  var root = new Root(login, perms);

  console.assert(root.getLogin() == "ROOT: " + login);
  console.assert(root.getPermissions() == perms);
}
//testRoot();
