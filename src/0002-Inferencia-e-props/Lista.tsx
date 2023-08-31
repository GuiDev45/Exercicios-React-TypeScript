// Importando a biblioteca React e o componente ItemLista do arquivo "ItemLista.js"
import React from "react";
import ItemLista from "./ItemLista";

// Componente Lista que renderiza uma lista de itens
function Lista() {
  // Definindo estados locais
  const [lista, setLista] = React.useState<string[]>([]); // Estado para a lista de itens
  const [novoItem, setNovoItem] = React.useState(""); // Estado para o novo item a ser adicionado
  const [editIndex, setEditIndex] = React.useState<number | null>(null); // Estado para controlar o índice do item em edição

  // Função para adicionar um novo item à lista
  function adicionarItem() {
    if (novoItem.trim() === "") return; // Ignora adição se o item estiver vazio

    // Atualiza a lista com base no estado de edição ou adição
    const updatedList = editIndex !== null ? [...lista] : [...lista, novoItem];
    if (editIndex !== null) updatedList[editIndex] = novoItem;

    // Atualiza os estados e limpa o estado de edição
    setLista(updatedList);
    setEditIndex(null);
    setNovoItem("");
  }

  // Função para remover um item da lista
  const removerItem = (index: number) => {
    const updatedList = [...lista];
    updatedList.splice(index, 1);
    setLista(updatedList);
  };

  // Função para entrar no modo de edição de um item
  const editarItem = (index: number) => {
    setEditIndex(index); // Define o índice do item em edição
    setNovoItem(lista[index]); // Preenche o campo de novoItem com o texto atual do item
  };

  // Renderização do componente
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
        />
        <button onClick={adicionarItem}>
          {editIndex !== null ? "Salvar Edição" : "Adicionar Item"}
        </button>
        <ul>
          {/* Mapeia a lista de itens para renderizar o componente ItemLista */}
          {lista.map((item, index) => (
            <ItemLista
              key={index}
              text={item}
              onRemove={() => removerItem(index)}
              onEdit={() => editarItem(index)}
            />
          ))}
        </ul>
      </form>
    </div>
  );
}

// Exporta o componente Lista
export default Lista;
