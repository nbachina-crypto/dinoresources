
### Styling
React supports styling using:
* **Inline styles** (JavaScript objects)
* **External CSS** (using `className`)
```javascript
<p style={{ color: "blue" }}>Hello</p>
```
```javascript
<p className="text">Hello</p>
```
---
### Form Programming
React uses **state** to control form inputs.
```javascript
<input value={name} onChange={(e) => setName(e.target.value)} />
```
* Input value is stored in state
* Updates happen using events
> This is called a **controlled component**.
---
### Final Idea
* Styling is flexible using CSS or JavaScript
* Forms are controlled using state and events
* React ensures efficient and structured UI development
