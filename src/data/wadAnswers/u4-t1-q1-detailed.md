**Java Servlets** are **server-side Java programs** used to handle client requests and generate dynamic web content. They are part of the **Java EE (Jakarta EE)** framework and run inside a **servlet container** such as Apache Tomcat.
### Servlet Architecture
The servlet architecture follows a **client-server model** involving:
* **Client** (web browser)
* **Web Server**
* **Servlet Container**
* **Servlet**
### Request Processing Flow
1. The **client sends an HTTP request** to the web server.
2. The **web server forwards** the request to the servlet container.
3. The **servlet container** checks if the servlet is loaded.
4. If not loaded:
* Loads the servlet class
* Creates an instance
* Calls the `init()` method
5. For each request:
* Creates `HttpServletRequest` and `HttpServletResponse` objects
* Calls the `service()` method
6. The `service()` method delegates to:
* `doGet()` for GET requests
* `doPost()` for POST requests
7. The servlet processes the request and **generates a response**.
8. The response is sent back to the client via the container.
### Servlet Example
```java
public class MyServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) {
        // handle GET request
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {
        // handle POST request
    }
}
```
### Servlet Lifecycle
The servlet lifecycle consists of three phases:
1. **Initialization** → `init()` is called once when the servlet is loaded
2. **Request Handling** → `service()` handles each request and calls `doGet()` or `doPost()`
3. **Destruction** → `destroy()` is called when the servlet is removed
### Key Components
* **Servlet Container** → manages lifecycle, request handling, and execution
* **Web Server** → handles HTTP communication
* **Servlet Class** → contains business logic
* **Client** → initiates requests
### Summary
Servlets act as an **intermediary** between client and server, handling requests, processing logic, and generating dynamic responses in a controlled server environment.

