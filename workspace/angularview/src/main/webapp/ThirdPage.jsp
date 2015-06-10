<!DOCTYPE html>
<html lang="en-US">
<title>Product manipulation</title>
<body>
<form name="productForm" id="productForm" ng-app="productApp" novalidate>
	<div ng-controller="productCtrl">
		<h2>Item List</h2>
		<table>
			<tr ng-repeat="x in items.item">
				<td>{{x.id}}</td>
				<td><input type="text" id="productname" name="productname" ng-model="x.productname" ng-minlength="1" required/></td>							
				<td><input type="number" id="quantity" name="quantity"  ng-model="x.quantity" ng-minlength="1" required/></td>				
				<td><input type="button" id="add" value="+" ng-click="addRow(x)"></input></td>
				<td><input type="button" id="delete" value="-" ng-click="deleteRow(x.id)"></input></td>				
			</tr>	
			<tr>
				<td>
					<span class="error" ng-show="productForm.productname.$error.required">Product Name Required</span>
					<span class="error" ng-show="productForm.productname.$error.text">Number Not allowed</span>
				</td>
				<td>
					<span class="error" ng-show="productForm.quantity.$error.required">Quantity Required</span>
					<span class="error" ng-show="productForm.quantity.$error.number">Albhabets Not allowed</span>
				</td>
				<td></td>
				<td></td>
			</tr>	
			<tr>
				<td><input type="submit" id="update" value="UPDATE LIST" ng-click="updateRow()"/></td>
			</tr>
		</table>		
	</div>
	<script
	src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<script
	src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-resource.js"></script>
<script src="productApp.js">
</script>
</form>

</body>
</html>