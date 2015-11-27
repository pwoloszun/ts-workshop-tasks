// TODO: implement SuperUser class, which inherits from User

function testSuperUser() {
  var login = "ed";
  var passwd = "#secret!";

  var su = new SuperUser(login, passwd);
  console.assert(su.getLogin() == login); // inherited from User
  console.assert(su.getPassword() == passwd);
}
//testSuperUser();
