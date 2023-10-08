import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";
// Escolher qual caminho de exercício deseja importar.
// import App from "./0001-Exercicios/App";
// import App from "./0002-Describing-the-UI/01-Your-First-Component/App";
// import App from "./0002-Describing-the-UI/02-Importing-and-Exporting-Components/App";
// import App from "./0002-Describing-the-UI/03-Writing-Markup-with-JSX/App";
// import App from "./0002-Describing-the-UI/04-JavaScript-in-JSX-with-Curly-Braces/App";
// import App from "./0002-Describing-the-UI/05-Passing-Props-to-a-Component/App";
// import App from "./0002-Describing-the-UI/06-Conditional-Rendering/App";
// import App from "./0002-Describing-the-UI/07-Rendering-Lists/App";
// import App from "./0002-Describing-the-UI/08-Keeping-Components-Pure/App";
// import App from "./0003-Adding-Interactivity/01-Responding-to-Events/App";
// import App from "./Thinking-in-React/App";
// import App from "./01-Exercicios/0002-exercicio/App";
// import App from "./Drag-and-Drop/App";
import App from "./Formulario-Avancado/App";

/*
Biblioteca usada para testar o drag and drop
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
*/

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*<DndProvider backend={HTML5Backend}> */}
    <App />
    {/*</DndProvider> */}
  </React.StrictMode>,
);
