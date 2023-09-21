import PackingList from "./Components/PackingList";

function App() {
  return (
    <div>
      <PackingList />
    </div>
  );
}

export default App;

/*
Recapitular
No React, você controla a lógica de ramificação com JavaScript.
Você pode retornar uma expressão JSX condicionalmente com uma ifinstrução.
Você pode salvar condicionalmente algum JSX em uma variável e incluí-lo dentro de outro JSX usando chaves.
Em JSX, {cond ? <A /> : <B />}significa “se cond, renderizar <A />, caso contrário <B />” .
Em JSX, {cond && <A />}significa “se cond, renderizar <A />, caso contrário, nada” .
Os atalhos são comuns, mas você não precisa usá-los se preferir o plain if.
*/
