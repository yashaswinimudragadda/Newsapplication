# 📰 NewsHub - Modern News Portal

A responsive React-based news application that allows users to browse top headlines by category, search for specific topics, and save articles to their favorites. Built with a focus on clean UI/UX and efficient state management.

## 🚀 Live Demo
[View the Live Site](https://yashaswinimudragadda.github.io/Newsapplication/)
* download the project into your local system
* npm install
* npm run dev
* as in this project i used to localstorage which fails to load data on live site so we can fix it by adding mockdata to this project feel it as a  challenge hope you like it

## 🛠️ Built With
* **React 18** - UI Library
* **Vite** - Build Tool (Lightning-fast development)
* **React Router Dom** - Navigation and routing
* **Context API** - Global state management for news and favorites
* **CSS3** - Custom styling with responsive layouts
* **GNews API** (Recommended) - Real-time news data fetching

---

## 📂 Folder Structure

The project follows a modular structure to keep components and logic separated:

```text
News-portal/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── components/      # Reusable UI parts (NavBar, Card, CategoryBar)
│   ├── contexts/        # Context API logic (NewsContext.jsx)
│   ├── css/             # Component-specific and global styles
│   ├── pages/           # Main views (Home.jsx, Favorites.jsx)
│   ├── services/        # API call logic (api.js)
│   ├── App.jsx          # Main application component & routes
│   └── main.jsx         # Entry point (Router configuration)
├── index.html           # Main HTML template
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
