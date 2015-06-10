var myModule=angular.module('myApp',['ngResource']);
myModule.factory("Post",function($resource){
	return $resource("http://localhost:8181/restfulapp/json/product/get")
});
myModule.controller('myCtrl1',function($scope,$http,Post){	
    $scope.productname="";
    $scope.quantity="";
    $scope.items={"item":[
        {productname:'Books',quantity:'1'},
        {productname:'Laptop',quantity:'5'},
        {productname:'Pens',quantity:'10'}

    ]};    
    $scope.addNames=function(){
        $scope.items.item.push({productname:$scope.productname,quantity:$scope.quantity});
        $scope.productname="";
        $scope.quantity="";
    }
    $scope.updateProduct=function(){    	
    	var req = {
    			 method: 'POST',
    			 url: 'http://localhost:8080/service/json/product/post/insertproduct',
    			 headers: {'Content-Type': 'application/json'},
    			 data: $scope.items
    			}
    			$http(req).success(function(data, status, headers, config){$scope.products=data;}
    			).error(function(data, status, headers, config){alert('Failed '+data)});
    }
    $scope.updateProductList=function(){    	
    	var req = {
    			 method: 'POST',
    			 url: 'http://localhost:8080/service/json/product/post/list',
    			 headers: {
    			   'Content-Type': 'application/json'
    			 },
    			 data: $scope.items
    			}
    			$http(req).success(function(data, status, headers, config){$scope.products=data;}
    			).error(function(data, status, headers, config){alert('Failed '+data)});
    }
    $scope.update=function(){    	   	
    	var res=$http.post('http://localhost:8080/service/json/product/post',$scope.items);
    	res.success(function(data, status, headers, config){
    		    		$scope.products=data;	
    		    });
    	res.error(function(data, status, headers, config){
    		    	alert("Failure :"+ JSON.stringify({data: data}));
    		    });
    }
    $scope.getData=function(){
    	$http({
    		url: 'http://localhost:8080/service/json/product/get',
            method: "GET",
            data: {productname:'Pens',quantity:'10'},
            headers: {'Content-Type': 'application/json'}
    	}).success(function (data, status, headers, config){
    		$scope.message=data;
    	}).error(function(data, status, headers, config){
    		$scope.status = status + ' ' + headers;
    	});
    } 
    $scope.getDatafromService=function(){
    	Post.get({},function(data){    		
    		$scope.message=data;
    	})
    }
    $scope.getDatafromProductService=function() {
    $http.get('http://localhost:8080/service/json/product/get').
        success(function(data) {
            $scope.message = data;
        });
}
    
});