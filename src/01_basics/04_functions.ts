// TODO: merge
function merge(destination, source) {
}

function testMerge() {
  // should return => {xxx: "qq", yyy: 2, zzz: 3}
  console.log("merge:", merge({xxx: 1, yyy: 2}, {xxx: "qq", zzz: 3}));
}

// TODO: reduce
function reduce(list, iterator) {
}

function testReduce() {
  var sumFn = function (memo, item, index, list) {
    return memo + item;
  };
  // should return => 14
  console.log("reduce 1:", reduce([2, 5, 7], sumFn));

  var mergeFn = function (memo, item, index, list) {
    return merge(memo, item);
  };
  // should return => {name: "bob", age: 12, sex: "M"}
  console.log("reduce 2:", reduce([{name: "bob"}, {age: 12}, {sex: "M"}], mergeFn));
}

// TODO: all
function all(list, test) {
}

function testAll() {
  // should return => false
  var greaterThanZero = function (item, index) {
    return item > 0;
  };
  console.log("all 1:", all([3, 5, -1, 9], greaterThanZero));

  // should return => true
  var firstLetterIsB = function (item, index) {
    return item[0] === "B";
  };
  console.log("all 2:", all(["Bob", "Ben", "Beth"], firstLetterIsB));
}


// TODO: pluck
function pluck(list, propertyName) {
}

function testPluck() {
  var people = [
    {name: "Bob", age: 12, sex: "M"},
    {name: "Kate", age: 22, sex: "F"},
    {name: "Ed", age: 34, sex: "M"}
  ];
  // should return => ["Bob", "Kate", "Ed"]
  console.log("pluck 1:", pluck(people, "name"));

  // should return => ["M", "F", "M"]
  console.log("pluck 2:", pluck(people, "sex"));
}


// TODO: groupBy
function groupBy(list, iterator) {
}

function testGroupBy() {
  var names = ["Bob", "Ed", "Kate", "Bo", "Ann", "Eve"];

  // should return => {2: ["Ed", "Bo"], 3: ["Bob", "Ann", "Eve"], 4: ["Kate"]}
  var byLength = function (item) {
    return item.length;
  };
  console.log("groupBy 1:", groupBy(names, byLength));

  // should return => {A: ["Ann"], B: ["Bob", "Bo"], E: ["Ed", "Eve"], K: ["Kate"]}
  var byFirstLetter = function (item) {
    return item[0];
  };
  console.log("groupBy 2:", groupBy(names, byFirstLetter));
}
