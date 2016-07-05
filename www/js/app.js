// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//se cambia en nombre de la app añadir la dependencia de la li Ngcordova
angular.module('lector', ['ionic','ngCordova','lector.controllers']).run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  // qui ya carga IOnico como document(ready)

  });
});
