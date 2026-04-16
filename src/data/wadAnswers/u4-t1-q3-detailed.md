Servlets provide a set of **primary methods** defined in the `HttpServlet` class to handle client requests and manage their lifecycle. These methods are invoked by the **servlet container**.
### init() Method
The `init()` method is used for **initialization**. It is called **only once** when the servlet is first loaded into memory. It is used to perform setup tasks such as initializing resources or configuration.
```java
public void init() {
    // initialization logic
}
```
### service() Method
The `service()` method is the **core request-handling method**. It is called by the container for **every incoming request**. In `HttpServlet`, it automatically determines the HTTP request type and delegates it to the appropriate method.
```java
protected void service(HttpServletRequest request, HttpServletResponse response) {
    // request dispatching
}
```
### doGet() Method
The `doGet()` method handles **HTTP GET requests**, typically used to **retrieve data** from the server.
```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) {
    // handle GET request
}
```
### doPost() Method
The `doPost()` method handles **HTTP POST requests**, typically used to **send data** to the server, such as form submissions.
```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) {
    // handle POST request
}
```
### Other HTTP Methods
* **doPut()** → handles PUT requests
* **doDelete()** → handles DELETE requests
* **doHead()** → handles HEAD requests
  These are less commonly used in basic applications.
### destroy() Method
The `destroy()` method is called **once** when the servlet is removed from service. It is used to **release resources** and perform cleanup.
```java
public void destroy() {
    // cleanup logic
}
```
### Summary
* `init()` → initialization
* `service()` → request handling and dispatching
* `doGet()`, `doPost()` → handle specific HTTP requests
* `destroy()` → cleanup
  These methods form the **core structure of servlet-based web applications**.
