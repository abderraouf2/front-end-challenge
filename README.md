# 🌿 Skip Selection Page Redesign – React Front-End Challenge

## 🧠 My Approach

This project is a full redesign of the "Choose Your Skip Size" page from [wewantwaste.co.uk](https://wewantwaste.co.uk). The goal was to improve the UI/UX while preserving the page's original functionality.

### Key Implementation Details:

- Built with **Next.js** and **React functional components**.
- Used the API:  
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`  
  to fetch and render skip options dynamically.
- Applied **Tailwind CSS** for a clean, responsive design that works on both desktop and mobile devices.
- Used **React Context API** to manage the selected skip globally across the app.
- Persisted the selected skip in **localStorage** so it remains after a page refresh.
- Integrated **Lenis** to enable smooth, hardware-accelerated scrolling for a more polished user experience.

## ⚙️ Technologies Used

- **Next.js** – framework for React with server-side rendering and routing
- **React** – with hooks and context for state management
- **Tailwind CSS** – utility-first styling and responsive design
- **React Context API** – to share the selected skip state across components
- **localStorage** – to persist the selected skip after reload
- **Lenis** – for smooth scrolling animation
- **Fetch API** – to retrieve live data from the skip API

## 🎨 Design Decisions & Assumptions

- The skip selection page was redesigned for a more modern and user-friendly layout.
- Skip cards are visually clean and responsive across screen sizes.
- Smooth scrolling with **Lenis** enhances user experience, especially on long pages or mobile devices.
- The global skip state is handled via **Context**, avoiding prop drilling.
- Assumed API responses would be valid and consistently structured.
- Prioritized simplicity, accessibility, and maintainability in code and design.

---

## 🔗 Live Preview & Sandbox

- 🚀 **Live Preview (Vercel):** [https://front-end-challenge-ivory.vercel.app/](https://front-end-challenge-ivory.vercel.app/)
- 🧪 **Testable Sandbox (CodeSandbox):** [https://codesandbox.io/p/github/abderraouf2/front-end-challenge/main?import=true](https://codesandbox.io/p/github/abderraouf2/front-end-challenge/main?import=true)


----
