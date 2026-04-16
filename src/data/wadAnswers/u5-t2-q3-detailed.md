### DOM Handling in AngularJS
In AngularJS, **DOM handling** is performed using **directives** instead of direct JavaScript methods like `document.getElementById()`.
Common directives used for DOM manipulation include:
* `ng-bind` – binds data to HTML elements
* `ng-model` – connects input fields to model data
* `ng-repeat` – repeats elements for lists
* `ng-if` – conditionally includes elements
### Example
```html
<p ng-bind="message"></p>
```
* The value of `message` from the model is displayed in the DOM
* No direct DOM access is required
AngularJS internally updates the DOM using **data binding** and the **digest cycle**, ensuring efficient and automatic updates.
> AngularJS avoids manual DOM manipulation by using declarative directives.
---
### Event Handling in AngularJS
**Event handling** is done using built-in **event directives**, which connect user actions to controller functions.
Common event directives:
* `ng-click`
* `ng-change`
* `ng-submit`
* `ng-keyup`
### Example
```html
<button ng-click="showMessage()">Click</button>
```
```javascript
$scope.showMessage = function() {
    $scope.message = "Button clicked";
};
```
* When the button is clicked, the function is executed
* The model updates, and the view reflects the change automatically
> Event directives eliminate the need for manual event listeners like `addEventListener()`.
---
### Form Validation in AngularJS
AngularJS provides **built-in form validation** using directives and form state properties.
Key validation properties:
* `$valid` – input is valid
* `$invalid` – input is invalid
* `$dirty` – input has been modified
* `$touched` – input has been focused and blurred
### Example
```html
<form name="myForm">
    <input type="text" name="username" ng-model="user.name" required>
    <span ng-show="myForm.username.$invalid && myForm.username.$touched">
        Username is required
    </span>
</form>
```
* The `required` directive ensures the field is not empty
The error message appears only when:
* The field is invalid
* The user has interacted with it
Additional validation directives:
* `ng-minlength`
* `ng-maxlength`
* `ng-pattern`
* Custom validation using directives
> AngularJS automatically tracks form state and validation without extra code.
---
### Summary
* **DOM manipulation** is handled using directives
* **Event handling** is managed through event-based directives
* **Form validation** is built-in with automatic state tracking
These features provide a **structured, declarative, and efficient** approach in AngularJS applications.
