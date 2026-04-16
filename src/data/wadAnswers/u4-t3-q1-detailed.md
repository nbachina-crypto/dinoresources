**JDBC (Java Database Connectivity)** is used to connect Java applications such as **Servlets and JSP** to databases for performing operations like **insert, update, delete, and retrieve**.
### Steps in JDBC Connectivity
### 1. Loading the Driver
The database driver is loaded to establish communication between Java and the database:
```java
Class.forName("com.mysql.cj.jdbc.Driver");
```
### 2. Establishing Connection
A connection is created using `DriverManager` with database URL, username, and password:
```java
Connection con = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/mydb", "username", "password");
```
### 3. Executing SQL Queries
SQL queries are executed using `Statement` or **`PreparedStatement`** (preferred for security and performance):
```java
PreparedStatement ps = con.prepareStatement("SELECT * FROM students");
ResultSet rs = ps.executeQuery();
```
### 4. Processing Results
The `ResultSet` stores query results and is processed row by row:
```java
while(rs.next()) {
    String name = rs.getString("name");
}
```
### 5. Usage in Servlets
In **Servlets**, JDBC code is typically written inside methods like `doGet()` or `doPost()`:
```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) {
    // JDBC code here
}
```
The servlet handles the request, interacts with the database, and sends the response.
### 6. Usage in JSP
In **JSP**, JDBC can be written using scriptlets, but this is not recommended for large applications. JSP should mainly handle presentation, while Servlets or JavaBeans manage database logic.
Example:
```jsp
<%
Connection con = DriverManager.getConnection(...);
Statement st = con.createStatement();
ResultSet rs = st.executeQuery("SELECT * FROM students");
while(rs.next()) {
    out.println(rs.getString("name"));
}
%>
```
### 7. Closing Resources
Resources must be closed to prevent memory leaks:
```java
rs.close();
ps.close();
con.close();
```
### Summary
JDBC connectivity involves:
* Loading the driver
* Establishing a connection
* Executing SQL queries
* Processing results
* Closing resources
  This enables dynamic interaction between Java web applications and databases.
