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