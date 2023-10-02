import { useState } from "react";

const Input = () => {
  const [texto, setTexto] = useState("");
  const [textoExibido, setTextoExibido] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTexto(event.target.value);
  }

  function exibirTexto() {
    setTextoExibido(texto);
  }

  return (
    <>
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={texto}
        onChange={handleInputChange}
      />
      <button type="button" onClick={exibirTexto}>
        Exibir Texto
      </button>
      <p>Texto Digitado: {textoExibido}</p>
    </>
  );
};

export default Input;
