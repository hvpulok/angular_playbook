console.log("script is connected");
var myApp = angular.module("myModule", []); // created a module

// registering a controller to module
myApp.controller("PeopleController", function($scope) {
    $scope.people = [{
        name: "John Doe",
        phone: "3452767342",
        city: "New York"
    }, {
        name: "Sarah Parker",
        phone: "3452767342",
        city: "Denver"
    }, {
        name: "Adam Doe",
        phone: "3452767342",
        city: "Tallahassee"
    }, {
        name: "Little John",
        phone: "3452767342",
        city: "New York"
    }];

});