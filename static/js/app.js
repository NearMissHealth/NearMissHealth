var app = angular.module("NearMissApp", ['ngRoute']);

/* 
 * Scheme / data definition for a post
 *
 *      hospital: the name of the hospital (String)
 *      area: the room, area, or unit of the hospital (String)
 *      emotion: the feelings of the user (awful, bad, neutral, good, or excellent) (String)
 *      date: the date and time of the encounter (Date)
 *      content: the content of the encounter / experience (aka the story) (String)
 *      name: the name of the user (Optional, String)
 *      email: the email of the user (Optional, String)
 */

// Demo data for testing
var demoData = [
    {
        hospital: "St. Mary Extreme Care",
        area: "Pregancy Ward",
        emotion: "neutral",
        date: new Date(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis sem nulla, ut egestas ligula fringilla vel. Aenean sollicitudin, mauris eu pretium maximus, lectus augue dapibus neque, pellentesque ullamcorper leo elit non nulla. Nam pellentesque pellentesque tempor. Phasellus gravida magna sed ex sagittis, eu maximus tortor maximus. Nulla nec dapibus.",
        name: null,
        email: null
    },
    {
        hospital: "St. Mary Extreme Care",
        area: "Pregancy Ward",
        emotion: "neutral",
        date: new Date(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis sem nulla, ut egestas ligula fringilla vel. Aenean sollicitudin, mauris eu pretium maximus, lectus augue dapibus neque, pellentesque ullamcorper leo elit non nulla. Nam pellentesque pellentesque tempor. Phasellus gravida magna sed ex sagittis, eu maximus tortor maximus. Nulla nec dapibus.",
        name: null,
        email: null
    },
    {
        hospital: "St. Mary Extreme Care",
        area: "Pregancy Ward",
        emotion: "neutral",
        date: new Date(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis sem nulla, ut egestas ligula fringilla vel. Aenean sollicitudin, mauris eu pretium maximus, lectus augue dapibus neque, pellentesque ullamcorper leo elit non nulla. Nam pellentesque pellentesque tempor. Phasellus gravida magna sed ex sagittis, eu maximus tortor maximus. Nulla nec dapibus.",
        name: null,
        email: null
    }
]

/*
 * Navigation Controller
 */
app.controller('NavController', function($scope, $location, $anchorScroll) {
    
    angular.element(document).ready(function () {
        $(".button-collapse").sideNav();
    });
    
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    }
    
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
        .when('/about', {
    		templateUrl: 'pages/about.html',
            controller: 'AboutController'
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
app.controller('HomeController', function($scope, $location, $anchorScroll, $http) {
    
    angular.element(document).ready(function () {
        // Do something on startup
        $('.collapsible').collapsible();
        $('select').material_select();
        $scope.posts = demoData;
        $scope.showConfirm = false;
    });
    
    $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
    }
    
    $scope.cfl = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    $scope.clear = function() {
        
        $scope.hospital = null;
        $('select').material_select();
        $scope.content = null;
        $scope.permission = false;
        
    }
    
    $scope.submit = function() {
        
        $scope.showConfirm = false;
        
        var data = { 
            hospital: $scope.hospital,
            type: $scope.type,
            content: $scope.content,
            permission: $scope.permission
        };
        
        console.log(data);
        
        var url = "/api/post_request";
        $http.post(url, data).then(function(res) {
            
            $scope.clear();
            $('#submitModal').openModal();
            
        })
        
    }
    
});

/*
 * Report Controller
 */
app.controller('AboutController', function($scope) {
    
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