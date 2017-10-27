var date = new Date();
console.log(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
var finalDate = "Order Date : " + date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
//onload(finalDate);

var outputDiv;
function onload(date) {
    document.getElementById('txtDate').innerHTML = date;
    //outputDiv.innerHTML = date;
}
function order(tabName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    if (tabName == "Manage") {
        window.location.href = "Order.html";
    }
    else if (tabName == "Create") {
        window.location.href = "CreateOrder.html";
    }
}

function myFunction() {
    var x = document.createElement("UL");
    x.setAttribute("id", "myUL");
    document.body.appendChild(x);

    var a = ["Alpha", "Beta", "Gama"];
    for (i = 0 ; i <= 2 ; i++) {
        var y = document.createElement("LI");
        var t = document.createTextNode(a[i]);
        y.appendChild(t);
        document.getElementById("myUL").appendChild(y);
    }
}

var orders = ["Order1", "Order2", "Order3"];
var orderContents = ["Delivered Order", "Order in process", "Shipped Order"];
var orderDates = [finalDate, finalDate, finalDate];
console.log(orderDates);

getOrders(orders, orderContents, orderDates);
function getOrders(orders, orderContents, orderDates) {
    //for (var i = 0; i < orders.length; i++) {i == j &&

    //}

    $('#test').find('div').each(function () {
        var innerDivId = $(this).attr('id');
        console.log(innerDivId);
        if (innerDivId != "undefined" && innerDivId == "test1") {
            for (var i = 0; i < orders.length; i++) {
                document.getElementById('order').innerHTML += orders[i] + "</br>";
                console.log(orders[i]);
            }
        }
        if (innerDivId != "undefined" && innerDivId == "test2") {
            for (var j = 0; j < orderContents.length; j++) {
                for (var k = 0; k < orderDates.length; k++) {
                    if (j == k) {
                        document.getElementById('orderContent').innerHTML += orderContents[j] + "</br>";
                        console.log(orderContents[j]);
                        document.getElementById('txtDate').innerHTML += orderDates[k] + "</br>";
                        console.log(orderDates[k]);
                    }
                }
            }
        }
    });
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


app.controller('myCtrl', ["$scope", "$rootScope", "$location", function ($scope, $rootScope, $location, $stateParams) {
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
    function close() {
        $window.location.href = "Order.html";
    }


    $scope.close = function () {
        $location.path('/order');
    }

}]);