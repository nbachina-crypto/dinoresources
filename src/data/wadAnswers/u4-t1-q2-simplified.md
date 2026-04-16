The **servlet life cycle** has three main stages.
### Initialization
The servlet is loaded, and the `init()` method is called once to set up resources.
### Request Processing
For every user request, methods like `doGet()` or `doPost()` are executed to process the request and send a response.
### Destruction
When the servlet is no longer needed, the `destroy()` method is called to clean up resources.
### Key Idea
**Load servlet → initialize → handle multiple requests → destroy**
