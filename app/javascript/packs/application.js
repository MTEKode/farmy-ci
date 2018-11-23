/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
//= require action_cable

import angular from 'angular';
import ngRoute from 'angular-route';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';

// Services
import GitService from './services/git.service'
import CableService from './services/cable.service'

// Components
import DeployComponent from './components/deploy.component';
import NavComponent from './components/nav.component';
import ConsoleComponent from './components/console.component';

// Pages
import {HomeCtrl, HomeTemplate} from './controllers/home';

// Init app
const app = angular.module('farmy-ci', [ngRoute, ngMaterial, ngMessages]);

// Injects
app.component('deployComponent', DeployComponent);
app.component('navComponent', NavComponent);
app.component('consoleComponent', ConsoleComponent);
app.controller('homeCtrl', HomeCtrl);
app.service('gitService', GitService);
app.service('cableService', CableService);

// Routes
app.config(($routeProvider, $locationProvider) => {
  $routeProvider
    .when('/', {
      template: HomeTemplate,
    });
  $locationProvider.html5Mode(true);
});
