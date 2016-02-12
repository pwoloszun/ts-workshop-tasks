function inheritanceTest() {
    var login : string, passwd : string;

    // User class
    login = "ed";
    var user = new User(login);
    console.assert(user.getLogin() == login);

    // SuperUser class
    login = "ed";
    passwd = "#secret!";

    var su = new SuperUser(login, passwd);
    console.assert(su.getLogin() == login); // inherited from User
    console.assert(su.getPassword() == passwd);

    // Root class
    login = "the Boss";
    passwd = "imba haha!";
    var perms : Permission[] = [Permission.Read, Permission.Write, Permission.Update, Permission.Delete];
    var root = new Root(login, perms, passwd);

    console.assert(root.getLogin() == "ROOT: " + login);
    console.assert(root.getPassword() == passwd);
    console.assert(root.getPermissions() == perms);

    console.log("Inheritance test passed");
}

inheritanceTest();
