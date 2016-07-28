// console.log("script is connected");
// people controller definition
function PeopleController($scope) {
    // define people model in scope here
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
}