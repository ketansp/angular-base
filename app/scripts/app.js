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
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url:'/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        abstract: true,
        data: {

        }
      })
      .state('about', {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        abstract: true,
        data: {

        }
      })
      .state("otherwise", {
        url : '/'
      });
  });
