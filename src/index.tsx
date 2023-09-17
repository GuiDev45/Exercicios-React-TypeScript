import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";
// Escolher qual caminho de exercício deseja importar.
import App from "./0001-Exercicios/App";
import Botao from "./0001-Exercicios/Components/Botao";
import Input from "./0001-Exercicios/Components/Input";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Botao />
    <Input />
  </React.StrictMode>,
);
