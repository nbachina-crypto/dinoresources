**Apache Tomcat** is a **servlet container** used to deploy and run Java web applications such as **Servlets** and **JSP**. Working with Tomcat involves installation, understanding its directory structure, deployment, and configuration.
### Installation and Setup
Tomcat is downloaded from the official Apache website and extracted. The installation directory contains key folders:
* `bin` → startup and shutdown scripts
* `conf` → configuration files
* `webapps` → deployed applications
* `lib` → required libraries
* `logs` → server logs
### Starting and Accessing Tomcat
Tomcat is started using scripts from the `bin` directory:
* `startup.sh` / `startup.bat` → start server
* `shutdown.sh` / `shutdown.bat` → stop server
  Once started, it can be accessed using:
```
http://localhost:8080
```
The default port is **8080**, which can be changed in the `server.xml` file.
### Deployment of Applications
Web applications are deployed by placing:
* Application folders
* WAR (Web Archive) files
  into the `webapps` directory.
  Tomcat automatically extracts and deploys WAR files.
### Web Application Structure
A typical structure:
```
MyApp/
 ├── index.jsp
 └── WEB-INF/
     ├── web.xml
     └── classes/
```
* `WEB-INF` → protected folder (not directly accessible)
* `web.xml` → deployment descriptor for servlet configuration
### Configuration Files
* `server.xml` → defines server settings like port and connectors
* `web.xml` → defines servlet mappings and configurations
* `context.xml` → application-specific settings (e.g., database resources)
### Environment Setup
Tomcat requires **JDK**, so `JAVA_HOME` must be set to the installed Java path.
### Summary
Working with Tomcat involves:
* Installing and starting the server
* Deploying applications in `webapps`
* Configuring settings using XML files
  This enables efficient management and execution of Java web applications.
