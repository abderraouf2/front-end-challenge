# 🌱 Skip Selection Page Redesign – React Front-End Challenge

## 🧠 Approach

This project is a redesign of the "Choose Your Skip Size" page from [wewantwaste.co.uk](https://wewantwaste.co.uk). The goal was to improve the UI/UX while keeping the functionality intact.

Here's how I approached the challenge:

- Rebuilt the skip selection page using **Next.js** and **React functional components**.
- Fetched skip data from the provided API:  
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`
- Ensured full **responsiveness** across desktop and mobile devices.
- Used **React Context API** to manage the selected skip state globally across the app.
- Stored the selected skip in **localStorage** to persist selection across page reloads.

## ⚙️ Technologies Used

- **Next.js** – React framework for building the application
- **React (Hooks & Context API)** – for component logic and state management
- **localStorage** – to persist selected skip
- **Fetch API** – to retrieve skip data from the API
- **CSS Modules / SCSS** – (update this to your exact styling method)
- **Responsive design principles** – for mobile/desktop support

## 🎨 Design Decisions & Assumptions

- The page was completely redesigned with a clean and modern layout for better usability.
- Skip options are displayed clearly with improved spacing, hierarchy, and mobile accessibility.
- Used **Context API** instead of prop drilling to manage the selected skip across components.
- **localStorage** is used to retain the user's selected skip after refreshing the page.
- Assumed the skip data from the API would always be valid and available.
- Focused on usability, visual clarity, and maintainable code structure.

---

