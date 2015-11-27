/// <reference path="./Observable.ts" />

// TODO: introduce EventsMap interface

//TODO: implement Evented class implementing Observable

function eventedExampleUsage() {
  var bob : Evented = new Evented();
  var eventName : string = "xxx:yyy";

  // assign many listeners to single event
  bob.on(eventName, function () {
    console.log("remove triggered", arguments);
  });
  bob.on(eventName, function () {
    console.log("another remove listener triggered...");
  });

  // trigger event
  bob.trigger(eventName, 1, "qq"); // loged msg on console

  // remove all event listeners
  bob.off(eventName);

  // trigger event
  bob.trigger(eventName, 1, "qq"); // nothing logged
}

//eventedExampleUsage();
