var app = angular.module('myApp', ["ngRoute"]);
// var app = angular.module('myApp', ["ngRoute"]);
// app.config(function ($routeProvider) {
//     $routeProvider
//         .when("/Order", {
//             templateUrl: "Order.html",
//             controller: "myCtrl"
//         });
// });
app.controller('myCtrl', function ($scope) {
    $scope.orders = [];
    $scope.orderContents = [];
    $scope.orderDates = [];
    $scope.orders = ["Order1", "Order2", "Order3"];
    $scope.orderContents = ["Delivered Order", "Order in process", "Shipped Order"];
    $scope.orderDates = [finalDate, finalDate, finalDate];

    $scope.orderDetails = [
    { "orderNo": "Order1", "orderDate": finalDate, "orderContent": "Delivered Order" },
    { "orderNo": "Order2", "orderDate": finalDate + 1, "orderContent": "Order in progress" },
    { "orderNo": "Order3", "orderDate": finalDate + 2, "orderContent": "Shipped Order" }
    ];

    function reset() {
        location.reload();
    }
    $scope.close = function(){
        window.location = "Order.html";
    }
});