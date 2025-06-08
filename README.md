# 🌿 Skip Selection Page Redesign – React Front-End Challenge

## 🧠 My Approach

This project is a full redesign of the "Choose Your Skip Size" page from [wewantwaste.co.uk](https://wewantwaste.co.uk). The goal was to create a modern, responsive UI while keeping the original functionality intact.

Here's how I approached it:

- Rebuilt the skip selection page using **Next.js** and **React functional components**.
- Used the provided API (`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`) to fetch and display skip data dynamically.
- Focused on a clean layout with better hierarchy and user experience for both desktop and mobile users.
- Implemented **React Context API** to manage the selected skip across the app without prop drilling.
- Stored the selected skip in **localStorage** so the choice persists after a page refresh.

## ⚙️ Technologies Used

- **Next.js** – for server-side rendering and routing
- **React (Hooks & Context API)** – for building the component logic and managing global state
- **Tailwind CSS** – for styling and responsive design
- **localStorage** – to persist the user's selected skip
- **Fetch API** – to retrieve skip data from the API

## 🎨 Design Decisions & Assumptions

- I used **Tailwind CSS** to speed up styling with utility classes and ensure responsiveness across screen sizes.
- I assumed the API would always return valid skip data.
- The selected skip is managed globally with **React Context** to simplify state handling.
- The use of **localStorage** helps retain the user's selection even after a page reload or browser close.
- The UI emphasizes accessibility, clarity, and ease of use for mobile users as well as desktop.

---
