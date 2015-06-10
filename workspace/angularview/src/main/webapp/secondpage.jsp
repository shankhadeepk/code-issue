<!DOCTYPE html>
<html lang="en-US">
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<body ng-app="myApp_2">
<div ng-controller="myCtrl">
  <p>Product Name : <input type="text" ng-model="productName">
  Quantity : <input type="text" ng-model="quantity"></p>
  <h1>Hello {{fullName()}}</h1>
</div>
<script>
var myModule=angular.module('myApp_2',[]);
myModule.controller('myCtrl',function($scope){
    $scope.productName = "";
    $scope.quantity = "";
    $scope.fullName = function(){
        return $scope.productName + " " + $scope.quantity;
    };
});
</script>
</body>
</html> 