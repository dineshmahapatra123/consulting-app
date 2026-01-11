# Beginner's Guide: Hosting Your React App on GitHub Pages

This guide is designed for beginners. It walks you through every single step required to take a local React application (like your Consulting App) and put it on the internet for free using GitHub Pages.

---

## **Part 1: GitHub Setup**

Before handling any code, we need a place on the internet to store it.

1.  **Log in to GitHub**
    *   Go to [github.com](https://github.com/) and sign in.
2.  **Create a New Repository**
    *   Click the **+** icon in the top-right corner and select **"New repository"**.
    *   **Repository name:** Enter `consulting-app` (or your preferred name).
    *   **Public/Private:** Choose **Public** (GitHub Pages is free for public repositories).
    *   Leave "Initialize this repository with a README" **unchecked**.
    *   Click **Create repository**.
3.  **Copy the Repository URL**
    *   You will see a link that looks like: `https://github.com/YOUR_USERNAME/consulting-app.git`.
    *   Copy this HTTPS link. You will need it in Part 3.

---

## **Part 2: Preparing Your Code**

We need to tell your app that it will live on a specific URL, not just on your local computer.

### **Step 1: Install the Deployment Tool**
Open your terminal (in your project folder) and run this command:
```bash
npm install gh-pages --save-dev
```
*This installs a helper tool that handles the complex parts of uploading files to GitHub.*

### **Step 2: Update `vite.config.js`**
Find the file named `vite.config.js` in your project files. Open it and add the `base` line as shown below:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // REPLACEMENT: Change '/consulting-app/' to match your specific repository name
  base: '/consulting-app/', 
})
```

### **Step 3: Update `package.json`**
Find the file named `package.json`. You need to add two lines to the `"scripts"` section:

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    // ADD THESE TWO LINES:
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
```
*   `predeploy`: Automatically builds your app whenever you try to deploy.
*   `deploy`: Sends the built files to GitHub.

### **Step 4: Use HashRouter (Vital for stability)**
In `src/App.jsx`, ensure you use `HashRouter`. This prevents "404 Page Not Found" errors when people refresh the page.

```javascript
// Import HashRouter, renaming it to 'Router' for convenience
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Your app content goes here */}
    </Router>
  );
}
```

---

## **Part 3: Connecting & Uploading to GitHub**

Now we connect your local computer folder to the GitHub repository you created in Part 1.

**Run these commands in your terminal one by one:**

1.  **Initialize Git** (starts tracking changes)
    ```bash
    git init
    ```

2.  **Add Your Files** (gets them ready to save)
    ```bash
    git add .
    ```

3.  **Save Your Files (Commit)**
    ```bash
    git commit -m "First upload"
    ```

4.  **Rename Branch** (Standard practice)
    ```bash
    git branch -M main
    ```

5.  **Connect to Remote** (Paste the URL you copied in Part 1)
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/consulting-app.git
    ```
    *(Note: If you copied the URL earlier, use that. Replace `YOUR_USERNAME` with your actual GitHub username.)*

6.  **Upload (Push) the Code**
    ```bash
    git push -u origin main
    ```

    ### 🛑 **CRITICAL STEP: How to Authenticate**
    When you run the command above, GitHub will ask for a **Username** and **Password**.
    *   **Username:** Type your GitHub username.
    *   **Password:** Do **NOT** type your account password. It will fail. You must use a **Personal Access Token**.

    #### **How to create a Token (Do this now):**
    1.  Go to GitHub.com and click your profile photo (top right) -> **Settings**.
    2.  Scroll down the left sidebar and click **Developer settings**.
    3.  Click **Personal access tokens** -> **Tokens (classic)**.
    4.  Click **Generate new token** -> **Generate new token (classic)**.
    5.  **Note:** Name it something like "Macbook Access".
    6.  **Expiration:** Set it to "No expiration" (or 90 days if you prefer).
    7.  **Select scopes:** Check the box named **`repo`** (this allows you to upload code).
    8.  Scroll down and click **Generate token**.
    9.  **COPY THE TOKEN IMMEDIATELY.** It looks like `ghp_xxxxxxxx...`. You won't see it again.

    #### **How to use it:**
    *   Go back to your terminal where it is asking for your `Password:`.
    *   Paste the token you just copied. (Note: You won't see any characters appear while typing/pasting. This is a security feature. Just paste and press Enter).


---

## **Part 4: The Final Deployment**

Now that everything is connected, publishing your live website is easy.

1.  **Run the Deploy Command**
    ```bash
    npm run deploy
    ```
2.  **Wait a Moment**
    This script will build your app and verify everything. Once it says "Published", you are done!

3.  **Visit Your Site**
    Your site will be live at: `https://YOUR_USERNAME.github.io/consulting-app/`
    *(It might take 1-2 minutes for the site to appear the first time.)*

---

## **Part 5: How to Update Your App Later**

When you make changes (like fixing a typo or adding a new feature), follow this simple loop:

1.  **Save your files.**
2.  **Terminal Commands:**
    ```bash
    git add .
    git commit -m "Description of what I changed"
    git push
    npm run deploy
    ```

**That's it! Your updates will go live automatically.**
