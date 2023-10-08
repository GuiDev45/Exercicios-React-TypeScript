// Importação de bibliotecas e definição das propriedades do DropZone.
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Modal from "react-modal";

type DropZoneProps = {
  onCardDropped: (text: string) => void;
};

// Componente DropZone.
function DropZone({ onCardDropped }: DropZoneProps) {
  // Definição de estados para controlar o modal e os valores dos inputs.
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [droppedCardText, setDroppedCardText] = useState<string>("");
  const [input1Value, setInput1Value] = useState<string>("");
  const [input2Value, setInput2Value] = useState<string>("");

  // Utilização da função useDrop para permitir a queda de cards na zona de drop.
  const [{ isOver }, drop] = useDrop({
    accept: "CARD", // Aceita apenas itens com o tipo "CARD".
    drop: (item: { text: string }) => {
      setDroppedCardText(item.text); // Define o texto do card que foi solto.
      setIsModalOpen(true); // Abre o modal.
      onCardDropped(item.text); // Chama a função de callback quando um card é solto.
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  // Funções para lidar com as mudanças nos inputs.
  const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1Value(e.target.value);
  };

  const handleInput2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput2Value(e.target.value);
  };

  // Função para lidar com o envio do modal.
  const handleModalSubmit = () => {
    console.log("Valor do Input 1:", input1Value);
    console.log("Valor do Input 2:", input2Value);
    // Aqui você pode fazer algo com os valores, como enviar para um servidor, atualizar o estado do aplicativo, etc.
    setIsModalOpen(false); // Fecha o modal após o envio.
  };

  // Renderiza a zona de drop e o modal.
  return (
    <div
      ref={drop} // Refere-se à área onde os cards podem ser soltos.
      style={{
        width: "300px",
        height: "300px",
        border: "2px dashed #000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isOver && <div style={{ fontSize: "16px" }}>Solte o card aqui!</div>}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Modal"
      >
        <h2>Modal com 2 Inputs</h2>
        <input
          type="text"
          placeholder="Input 1"
          value={input1Value}
          onChange={handleInput1Change}
        />
        <input
          type="text"
          placeholder="Input 2"
          value={input2Value}
          onChange={handleInput2Change}
        />
        <button onClick={handleModalSubmit}>Enviar</button>
      </Modal>
    </div>
  );
}

export default DropZone;
