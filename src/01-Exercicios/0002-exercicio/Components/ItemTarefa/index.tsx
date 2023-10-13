import style from "./ItemTarefa.module.scss";

export default function TarefaItem({ tarefa }: TItemTarefa) {
  return <li className={style.itemTarefa}>{tarefa}</li>;
}
