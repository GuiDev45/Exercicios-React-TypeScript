import ListaDeTarefas from "../Components/ListaDeTarefas";
import style from "./App.module.scss";

export default function App() {
  return (
    <div>
      <div className={style.container}>
        <img
          src="./0002-exercicio-imgs/Lista-de-Tarefas-logo.png"
          alt="Lista de tarefas"
        />
        <ListaDeTarefas />
      </div>
    </div>
  );
}
