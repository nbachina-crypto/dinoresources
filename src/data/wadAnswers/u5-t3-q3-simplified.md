
To build a React app, it is first developed locally using tools like **Create React App** and run using:
```bash
npm start
```
After development is complete, the production version is created using:
```bash
npm run build
```
This generates optimized static files in a `build` folder.
To deploy the app, these files are uploaded to a server or hosting platform like:
* **Netlify**
* **Vercel**
* **AWS**
If routing is used, the server must be configured to always load `index.html`.
### Final Idea
The process is:
1. **Develop**
2. **Build**
3. **Upload and host the build files**
