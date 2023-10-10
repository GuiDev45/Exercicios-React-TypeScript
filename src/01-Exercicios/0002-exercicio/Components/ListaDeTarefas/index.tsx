import { useState } from "react";
import Botao from "../Botao";
import Input from "../Input";

export default function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  const handleClick = () => {
    // Verifique se a tarefa não está vazia antes de adicionar
    if (tarefa.trim() !== "") {
      // Adicione a tarefa ao array de tarefas
      setTarefas([...tarefas, tarefa]);
      // Limpe o input após adicionar a tarefa
      setTarefa("");
    }
  };

  const removeTarefa = (index: number) => {
    // Uma nova lista de tarefas que exclui a tarefa no índice atual
    const novaListaTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novaListaTarefas);
  };

  return (
    <div>
      <Input value={tarefa} onChange={setTarefa} />
      <Botao onClick={handleClick}>Adicionar</Botao>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <Botao onClick={() => removeTarefa(index)}>Remover</Botao>
          </li>
        ))}
      </ul>
    </div>
  );
}
