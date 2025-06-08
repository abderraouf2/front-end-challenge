# React Front-End Challenge – Skip Selection Redesign

## 🧠 My Approach

The goal of this challenge was to redesign the "Choose Your Skip Size" page while maintaining its core functionality. Here's how I approached it:

- I started by analyzing the original page to understand its structure and flow.
- I then created a new layout from scratch, focusing on improving responsiveness, user experience, and modern visual design.
- I used the API provided (`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`) to dynamically fetch and render skip options.
- I ensured the new design works well on both mobile and desktop screens using responsive CSS and layout techniques.
- To handle state management across components, I used the React Context API.

## ⚙️ Technologies Used

- **React** (Functional Components & Hooks)
- **React Context API** – for managing global skip selection state
- **LocalStorage** – to persist the selected skip across refreshes
- **CSS / SCSS / Styled Components** – for styling (specify based on what you used)
- **Axios / Fetch API** – for retrieving skip data from the backend
- **Vite / Create React App / Next.js** – (mention the tooling you used to scaffold the project)

## 🎨 Design Decisions & Assumptions

- I used **localStorage** to persist the selected skip so the selection remains even after refreshing or navigating away.
- I implemented **React Context** to manage and share skip selection state throughout the app efficiently.
- I assumed that the API will always return a valid and complete list of skips based on location.
- I focused on **improving UI clarity**, ensuring that skip options are visually distinct, easy to select, and mobile-friendly.
- Accessibility was considered in basic form elements and layout but could be further enhanced in future iterations.

---
