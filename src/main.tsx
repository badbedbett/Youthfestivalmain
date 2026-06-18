
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { initProgramSectionTitleSize } from "./app/utils/measureProgramTitleFontSize";
  import "./styles/index.css";

  initProgramSectionTitleSize();
  createRoot(document.getElementById("root")!).render(<App />);
  