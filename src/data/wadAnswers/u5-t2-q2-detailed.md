### Data Binding in AngularJS
**Data binding** in AngularJS is a mechanism that synchronizes data between the **model** and the **view**. The most important type is **two-way data binding**, where:
* Changes in the **model** automatically update the **view**
* Changes in the **view** (e.g., user input) update the **model**
This eliminates the need for manual DOM manipulation.
AngularJS achieves this using directives like **`ng-model`**, which binds input elements to application data.
### Example
```html
<div ng-app="">
    <input type="text" ng-model="name">
    <p>{{ name }}</p>
</div>
```
* When the user types in the input field, the value of **`name`** updates in real time
* The same value is displayed using the expression **`{{ name }}`**
### Digest Cycle
AngularJS uses a **digest cycle** to track changes:
* It watches model variables
* Updates the view whenever a change is detected
> The digest cycle is the core mechanism behind AngularJS's automatic UI updates.
---
### Controllers in AngularJS
**Controllers** are JavaScript functions that manage application **data** and **logic**. They act as an interface between the **model** and the **view**.
Controllers define variables and functions using the **`$scope` object**, which makes data accessible to the view.
### Controller Example
```javascript
var app = angular.module("myApp", []);
app.controller("myController", function($scope) {
    $scope.name = "Rahul";
});
```
### Using Controller in HTML
```html
<div ng-app="myApp" ng-controller="myController">
    {{ name }}
</div>
```
### Responsibilities of Controllers
* Initialize data
* Handle user actions
* Update the model
> Controllers do **not** directly manipulate the DOM. They rely on AngularJS features like **data binding** and **directives**.
---
### Summary
* **Data binding** ensures automatic synchronization between model and view
* **Controllers** manage data and application logic
* Together, they form the core interaction mechanism in AngularJS applications
---
