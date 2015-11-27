/// <reference path="../02_interfaces/Evented.ts" />

// TODO: define Timer class, reuse Evented

function timerTest() {
  // TODO: introduce interface for timer params
  var params = {
    duration: 20, // in sec, default: Infinity
    step: 2 // in sec, default: 1
  };
  var timer = new Timer(params);

  // on(eventName, listener) - assigns listener to given eventName ("start", "pause", "tick", "end")
  // triggered when timer is started
  timer.on("start", function(currentTime) {
    console.log("started at: " + currentTime);
  });

  // triggered when timer finishes or has been stoped
  timer.on("stop", function(currentTime) {
    // this === timer
    console.log("stopped at: " + currentTime);
  });

  // triggered when timer is paused
  timer.on("pause", function(currentTime) {
    console.log("paused at: " + currentTime);
  });

  // triggers every step seconds
  timer.on("tick", function(currentTime) {
    console.log("tick at: " + currentTime);
  });

  timer.start(); // start() - starts timer

  setTimeout(function() {
    timer.pause(); // pause() - pauses counter
  }, 5000);

  setTimeout(function() {
    timer.start(); // resume paused timer
  }, 6000);

  setTimeout(function() {
    timer.stop(); // stop() - stops timer
  }, 16000);

  setTimeout(function() {
    timer.start(); // stop() - stops timer
  }, 18000);
}

//timerTest();
