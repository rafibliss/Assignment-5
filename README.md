# 🚀 Dev Stack

A modern, interactive web application designed to help developers explore, compare, and build their ideal technology stack for upcoming projects[cite: 8, 18].

---

## 📌 About The Project

**Dev Stack** is an intuitive platform where developers can browse various technologies, frameworks, databases, and tools across different categories[cite: 8]. Users can compare specs, levels, and ratings, and dynamically assemble their custom tech stack with a single click.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Build Tool:** Vite

---

## ✨ Key Features

1. **Interactive Stack Builder**: Seamlessly add or remove frontend, backend, and database tools to your personalized stack sidebar in real time.
2. **Duplicate Prevention & Smart Controls**: Prevents adding duplicate items to your stack while dynamically disabling the "Add to Stack" button with visual feedback once selected.
3. **Dynamic Responsive Layout**: Built with a sleek 12-column grid layout and modern custom Tailwind components for a clean user experience across devices.

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have Node.js installed on your machine:
* [Node.js](https://nodejs.org/) (v16 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/dev-stack.git](https://github.com/rafibliss/Assignment-5.git)


---



### i. What is JSX, and why is it used in React?
JSX stands for JavaScript XML[cite: 16]. It lets us write HTML-like markup directly inside our JavaScript/TypeScript code[cite: 16]. React uses it because it makes component layout and logic much easier to read and write without needing to manually manipulate the DOM[cite: 16].

### ii. What is the difference between props and state?
* **Props** are read-only data passed down from a parent component to a child component (like function arguments)[cite: 16]. 
* **State** is dynamic data managed *inside* a component that can change over time based on user interactions[cite: 16]. When state changes, React re-renders the component to update the UI[cite: 16].

### iii. What does the `useState` hook do, and where did you use it in this project?
`useState` tells React to track a piece of variable data that can change and trigger a UI update when updated[cite: 10, 16]. In this project, I used it inside `AllTech.tsx` as `const [selectedStack, setSelectedStack] = useState([])` to store and manage the list of technologies added to "Your Stack"[cite: 10, 16].

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects in React, such as fetching data from an external file or API after the component mounts on the screen[cite: 16]. It ensures data fetching happens asynchronously without blocking the UI rendering process[cite: 16].

### v. Why does every item in a `.map()` list need a unique `key` prop?
React needs unique keys to track which specific items in a list have changed, been added, or been removed[cite: 10, 16]. This helps React update only the affected items in the DOM rather than re-rendering the entire list[cite: 10, 16].

### vi. What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding UI elements based on a specific condition[cite: 11, 16]. In `SelectedCard.tsx`, I used a ternary operator to render an empty state message when `selectedStack.length === 0`, or display the list of cards when items exist[cite: 11, 16].

### vii. How do you pass data from parent to child, and how does child send something back?
* **Parent to Child:** You pass data down directly as props (e.g., `<SelectedCard selectedStack={selectedStack} />`)[cite: 10].
* **Child to Parent:** The parent passes a callback function down as a prop (e.g., `onRemove={handleRemove}`), and the child calls that function with data when an event occurs[cite: 10, 11].