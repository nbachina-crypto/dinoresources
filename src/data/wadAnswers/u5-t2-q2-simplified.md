### Data Binding
**Data binding** automatically connects the **model (data)** with the **view (UI)**:
* When data changes → UI updates
* When user input changes → data updates
### Example
```html
<input ng-model="name">
{{ name }}
```
---
### Controllers
**Controllers** are functions that store and manage data. They use **`$scope`** to expose data to the view.
### Example
```javascript
app.controller("myController", function($scope) {
    $scope.name = "Rahul";
});
```
---
### Final Idea
* **Data binding** keeps data and UI in sync
* **Controllers** manage the data used in the application
