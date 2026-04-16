### Introduction
The process of **building and deploying a ReactJS application** includes three main stages:
1. Development setup
2. Creating an optimized production build
3. Deploying the build files to a server or hosting platform
---
### Development Setup
A React application is usually created using tools like **Create React App (CRA)** or **Vite**.
During development, the application runs on a local development server using:
```bash
npm start
```
This starts a local server and provides features like **hot reloading**, which helps developers see changes instantly.
---
### Production Build
Once development is completed, the application is prepared for production using:
```bash
npm run build
```
This command creates an **optimized production build** by:
* Bundling JavaScript, CSS, and assets into static files
* Minimizing file sizes
* Removing unused code
* Improving application performance
The generated files are usually stored in a `build` or `dist` folder.
---
### Contents of the Build Folder
The production build folder generally contains:
* `index.html`
* Minified JavaScript files
* CSS files
* Assets such as images
Since React applications are typically **client-side applications**, these static files can be served by any web server.
---
### Deployment Options
React build files can be deployed to different hosting environments.
| Deployment Option                 | Description                                         |
| --------------------------------- | --------------------------------------------------- |
| **Netlify / Vercel**              | Directly deploys and serves the build folder        |
| **Apache / Nginx**                | Build files are placed in the server root directory |
| **AWS / Firebase / GitHub Pages** | Cloud-based hosting for static files                |
Common deployment platforms include:
* **Netlify**
* **Vercel**
* **AWS (S3 + CloudFront)**
* **Firebase Hosting**
* **GitHub Pages**
---
### Client-Side Routing Configuration
If the application uses **client-side routing** with tools like **React Router**, the server must be configured to redirect all routes to `index.html`.
This ensures that routing is handled by React instead of the server.
### Example
```nginx
location / {
    try_files $uri /index.html;
}
```
> Proper server configuration is necessary when using React Router in production.
---
### Environment Variables
**Environment variables** can be configured during build time to manage:
* API URLs
* App settings
* Environment-specific configurations
This helps keep the application flexible across development and production environments.
---
### Summary
The process of building and deploying a ReactJS application involves:
1. Developing the app locally
2. Generating an optimized production build
3. Uploading the static build files to a hosting platform or server
4. Configuring routing and environment settings if required