/// <reference path="../lib/require" />

require.config({

  baseUrl: 'src',

  paths: {
    'jquery': '../lib/jquery'
  }

});

require([
  "jquery",
  //,'01_modules/inheritanceTest',
], ($, ...args) => {

  //console.log("require args", $, args);

});
