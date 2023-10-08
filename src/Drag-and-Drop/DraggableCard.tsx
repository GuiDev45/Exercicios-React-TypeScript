// Importação da função useDrag do react-dnd e definição das propriedades do DraggableCard.
import { useDrag } from "react-dnd";

interface DraggableCardProps {
  id: string;
  text: string;
}

// Componente DraggableCard.
function DraggableCard({ id, text }: DraggableCardProps) {
  // Utilização da função useDrag para tornar o componente arrastável.
  const [, ref] = useDrag({
    type: "CARD", // Define o tipo do item arrastável.
    item: { id, text }, // Define os dados a serem associados ao item arrastável.
  });

  // Renderiza o card com o texto fornecido.
  return (
    <div
      ref={ref} // Refere-se ao elemento que será arrastado.
      style={{ padding: "8px", margin: "8px", border: "1px solid #ccc" }}
    >
      {text}
    </div>
  );
}

export default DraggableCard;
