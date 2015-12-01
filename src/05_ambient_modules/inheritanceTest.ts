// TODO import internal modules

function inheritanceTest() {
  var login = "ed";
  var user = new User(login);

  console.assert(user.getLogin() == login);

  //TODO: reuse Permissions enum
  var perms = ["r", "w", "d", "u"];
  var root = new Root(login, perms);
  console.assert(root.getLogin() == "ROOT: " + login);
  console.assert(root.getPermissions() == perms);
}

inheritanceTest();
