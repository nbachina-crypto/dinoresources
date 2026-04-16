The **life cycle of a servlet** is managed by the **servlet container** and consists of three main stages: **initialization**, **request processing**, and **destruction**.
### 1. Initialization Phase
When a request for a servlet is received for the first time, the container:
* Loads the servlet class into memory
* Creates a **single instance** of the servlet
* Calls the `init()` method
  The `init()` method is executed **only once** during the servlet’s lifetime and is used for **one-time setup tasks** such as initializing resources or database connections.
```java
public void init() {
    // initialization code
}
```
### 2. Request Processing Phase
For every client request:
* The container creates `HttpServletRequest` and `HttpServletResponse` objects
* Calls the `service()` method
* `service()` delegates the request to methods like `doGet()`, `doPost()`, `doPut()`, or `doDelete()`
```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) {
    // handle GET request
}
```
This phase occurs **multiple times**, as a single servlet instance handles multiple requests, often using **multithreading**.
### 3. Destruction Phase
When the servlet is no longer needed (e.g., server shutdown or reload), the container calls the `destroy()` method.
This method is executed **only once** and is used to **release resources** such as database connections or file handles.
```java
public void destroy() {
    // cleanup code
}
```
### Lifecycle Sequence
Loading and instantiation → `init()` → multiple `service()` calls → `destroy()`
### Summary
The servlet life cycle ensures **efficient resource management** and **handling of multiple client requests** within a managed server environment.