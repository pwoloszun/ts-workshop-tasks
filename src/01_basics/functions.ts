/*
 * Calls given function fn in context of object contextObj, with every
 * other parameter passed to function
 * Usage:
 * callInContext(myFunction, myObject, 1, "xxx", [])
 * */
function callInContext(fn, contextObj) {
}

function callInContextExampleUsage() {
  var myFunction = function(str, int) {
    // this === bob
    console.log("context == ", this);
    console.log("str == ", str);
    console.log("int == ", int);
    console.log("args == ", arguments);
    return Math.random();
  };

  var bob = {
    name: "Bob"
  };

  var result = callInContext(myFunction, bob, "www", 997);
  console.log("myFunction result == ", result);
}
//callInContextExampleUsage();

/*
 * Binds function fn to context contextObj, and returns binded function
 * Each time binded function is called, its called in context of contextObj
 * */
function bind(x, y) {
  return undefined;
}


function bindTest() {
  var bob = {
    name: "Bob",
    age: 12
  };
  var myFn = function () {
    console.log(this, arguments);
    return this.age;
  };

  var bindedFn = bind(bob, myFn);

  var result = bindedFn(123, "qq!");// inside bindedFn: this === bob
  console.assert(bob.age == result);

  result = bindedFn.apply({name: "Kate"}, [123, "qq!"]);// inside bindedFn: this === bob
  console.assert(bob.age == result);

  var ed = {
    name: "Ed",
    myMethod: bindedFn
  };
  result = ed.myMethod(); // inside bindedFn: this === bob
  console.assert(bob.age == result);
}
//bindTest();
