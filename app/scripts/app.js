'use strict';

/**
 * @ngdoc overview
 * @name angularBaseApp
 * @description
 * # angularBaseApp
 *
 * Main module of the application.
 */
angular
  .module('angularBaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $locationProvider) {
    $stateProvider
      .state('main', {
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        abstract: false,
        data: {

        }
      })
      .state('about', {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        abstract: false,
        data: {

        }
      })
      .state("otherwise", {
        url : '/'
      });

      $locationProvider.html5Mode(true);
  });
