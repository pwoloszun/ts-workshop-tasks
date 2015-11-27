// TODO: MyArray inherits from Array

function inheritanceTest() {
  var arr = new MyArray();
  arr.push('a');
  arr.push("b");
  arr.each(function (item) {
    console.log("Each:", item);
  });
}

//inheritanceTest();
