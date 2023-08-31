// Define as propriedades do componente ItemLista
type ItemListaProps = {
  text: string;
  onRemove: () => void;
  onEdit?: () => void;
};

// Componente ItemLista que renderiza um item da lista
function ItemLista({ text, onRemove, onEdit }: ItemListaProps) {
  return (
    <li>
      {text}
      <div>
        <button onClick={onRemove}>Remover</button>
        <button onClick={onEdit}>Editar</button>
      </div>
    </li>
  );
}

// Exporta o componente ItemLista
export default ItemLista;
