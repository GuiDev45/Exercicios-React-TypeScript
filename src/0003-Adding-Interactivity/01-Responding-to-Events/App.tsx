import Button from "./Components/Button";
import Toolbar02 from "./Components/Button02";
import Signup from "./Components/Signup";
import Toolbar from "./Components/Toolbar";

function App() {
  return (
    <div>
      <Button />
      <Toolbar />
      <Toolbar02 />
      <Signup />
    </div>
  );
}

export default App;

/*
Respondendo a eventos

React permite adicionar manipuladores de eventos ao seu JSX. Os manipuladores de eventos são suas próprias funções que serão acionadas em resposta a interações como clicar, passar o mouse, focar nas entradas do formulário e assim por diante.

Armadilha
Todos os eventos se propagam no React except onScroll, que só funciona na tag JSX à qual você o anexa.

Recapitular
Você pode lidar com eventos passando uma função como suporte para um elemento como <button>.
Os manipuladores de eventos devem ser passados, não chamados! onClick={handleClick}, não onClick={handleClick()}.
Você pode definir uma função de manipulador de eventos separadamente ou em linha.
Os manipuladores de eventos são definidos dentro de um componente, para que possam acessar adereços.
Você pode declarar um manipulador de eventos em um pai e passá-lo como suporte para um filho.
Você pode definir seus próprios objetos de manipulador de eventos com nomes específicos do aplicativo.
Os eventos se propagam para cima. Invoque e.stopPropagation()o primeiro argumento para evitar isso.
Os eventos podem ter comportamento padrão indesejado do navegador. Ligue e.preventDefault()para evitar isso.
Chamar explicitamente um suporte de manipulador de eventos de um manipulador filho é uma boa alternativa à propagação.
*/
