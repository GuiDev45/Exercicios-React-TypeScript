import React, { useState } from "react";

type TBotao = {
  children: React.ReactNode;
  onClick: () => void;
};

function Botao({ children, onClick }: TBotao) {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

type TInput = {
  value: string;
  onChange: (value: string) => void;
};

function Input({ value, onChange }: TInput) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

function AddTarefa() {
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

  return (
    <div>
      <Input value={tarefa} onChange={setTarefa} />
      <Botao onClick={handleClick}>Adicionar</Botao>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <AddTarefa />
    </div>
  );
}
