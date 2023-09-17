import Avatar from "./Components/Avatar";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div>
      <h2>Componente Avatar</h2>
      <Avatar />
      <h2>Componente TodoList</h2>
      <TodoList />
    </div>
  );
}

export default App;

/*
Resumo
- Atributos JSX estre aspas são passados como strings.
- As chaves permitem que você inclua lógica e variáveis javascript em sua marcação.
- Eles funcionam dentro do conteúdo da tag JSX ou imediatamente após =nos atributos.
- {{e }}não é uma sintaxe especial: é um objeto JavaScript colocado entre chaves JSX.
*/
