import { useState } from "react";
import Botao from "../Botao";
import Input from "../Input";
import styles from "./ListaDeTarefas.module.scss";
import botao from "../Botao/Botao.module.scss";
import ulContainer from "../ItemTarefa/ItemTarefa.module.scss";
import ItemTarefa from "../ItemTarefa";

export default function ListaDeTarefas() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  const handleClick = () => {
    if (tarefa.trim() !== "") {
      setTarefas([...tarefas, tarefa]);
      setTarefa("");
    }
  };

  const removeTarefa = (index: number) => {
    const novaListaTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novaListaTarefas);
  };

  return (
    <div>
      <div className={styles.containerInputAdicionar}>
        <Input value={tarefa} onChange={setTarefa} />
        <Botao
          className={`${botao.botaoGeral} ${botao.botaoVerde}`}
          onClick={handleClick}
          type="submit"
        >
          Adicionar
        </Botao>
      </div>

      <div>
        {tarefas.map((tarefa, index) => (
          <div className={ulContainer.ulContainer} key={index}>
            <ItemTarefa tarefa={tarefa} onRemove={() => removeTarefa(index)} />
            <Botao
              className={`${botao.botaoGeral} ${botao.botaoVermelho}`}
              onClick={() => removeTarefa(index)}
              type="submit"
            >
              Remover
            </Botao>
          </div>
        ))}
      </div>
    </div>
  );
}
