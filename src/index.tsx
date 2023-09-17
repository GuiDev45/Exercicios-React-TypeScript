import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";
// Escolher qual caminho de exercício deseja importar.
// import App from "./0001-Exercicios/App";
// import App from "./0002-Describing-the-UI/01-Your-First-Component/App";
// import App from "./0002-Describing-the-UI/02-Importing-and-Exporting-Components/App";
// import App from "./0002-Describing-the-UI/03-Writing-Markup-with-JSX/App";
import App from "./0002-Describing-the-UI/04-JavaScript-in-JSX-with-Curly-Braces/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
