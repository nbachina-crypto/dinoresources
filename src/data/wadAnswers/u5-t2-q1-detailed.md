**AngularJS** is a **client-side JavaScript framework** used to build dynamic **single-page applications (SPA)**. It extends HTML with custom attributes and provides a structured approach to frontend development.
### Expressions in AngularJS
**Expressions** are used to bind data to HTML. They are written using **double curly braces `{{ }}`** and are evaluated by AngularJS.
Example:
```html
<p>{{ 5 + 5 }}</p>
<p>{{ user.name }}</p>
```
Expressions can include:
* Variables
* Arithmetic operations
* Function calls
  Unlike JavaScript expressions:
* They are **safe** (no errors for undefined values)
* Used directly inside HTML templates
* Automatically update when data changes
### Two-Way Data Binding
AngularJS supports **two-way data binding**, which keeps the **model and view synchronized**. Any change in data is instantly reflected in the UI and vice versa, reducing manual DOM manipulation.
### Modules in AngularJS
A **module** is the **main container** of an AngularJS application. It organizes components like controllers, services, directives, and filters.
A module is created using:
```javascript
var app = angular.module("myApp", []);
```
* `"myApp"` → module name
* `[]` → dependency list (other modules can be added here)
### Controllers in Modules
Controllers define **application logic and data** within a module:
```javascript
app.controller("myController", function($scope) {
    $scope.message = "Hello AngularJS";
});
```
This data is accessed in HTML using expressions:
```html
<div ng-app="myApp" ng-controller="myController">
    {{ message }}
</div>
```
### Other Core Features
* **Directives** → extend HTML (`ng-model`, `ng-repeat`)
* **Dependency Injection** → manages components efficiently
* **Routing** → enables single-page navigation
### Summary
* **Expressions** → bind data to the view
* **Modules** → organize the application structure
  Together, they form the **core architecture of AngularJS**.
