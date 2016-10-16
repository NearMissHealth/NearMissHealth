var app = angular.module("NearMissApp", ['ngRoute']);

/*
 * Navigation Controller
 */
app.controller('NavController', function() {
    
    angular.element(document).ready(function () {
        $(".button-collapse").sideNav();
    });
    
});

/*
 * Routing Configuration
 */
app.config(function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'pages/home.html',
            controller: 'HomeController'
    	})
        .when('/home', {
    		templateUrl: 'pages/home.html',
            controller: 'HomeController'
    	})
        .when('/report', {
    		templateUrl: 'pages/form.html',
            controller: 'ReportController'
    	})
        .when('/contact', {
    		templateUrl: 'pages/contact.html',
            controller: 'ContactController'
    	})
        .otherwise({
            redirectTo: "/"
        });
});

/*
 * Home Controller
 */
app.controller('HomeController', function() {
    
    angular.element(document).ready(function () {
        // Do something on startup
    });
    
});

/*
 * Report Controller
 */
app.controller('ReportController', function() {
    
    angular.element(document).ready(function () {
        // Do something on startup
        $('select').material_select();
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
          });
        $('.timepicker').pickatime({
            default: 'now',
            twelvehour: true, // change to 12 hour AM/PM clock from 24 hour
            donetext: 'OK',
            autoclose: false,
            vibrate: true // vibrate the device when dragging clock hand
        });
    });
    
});

/*
 * Contact Controller
 */
app.controller('ContactController', function() {
    
    angular.element(document).ready(function () {
        // Do something on startup
    });
    
});