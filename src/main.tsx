import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Always start fresh in dark mode on every visit/reload, regardless of what
// theme was last selected (the toggle still works during the session, but
// the preference is not carried over to the next visit).
localStorage.removeItem("portfolio-theme");

createRoot(document.getElementById("root")!).render(<App />);