type ItemProps = {
  name: string;
  isPacked: boolean;
};

/*
Se a isPackedpropriedade for true, este código retornará uma árvore JSX diferente. Com essa alteração, alguns dos itens recebem uma marca de seleção no final:

Observe como você está criando lógica de ramificação com JavaScript ife returninstruções. No React, o fluxo de controle (como as condições) é tratado por JavaScript.

Com o ternario fica mais facil manutenção, pois não preciso nesse caso declarar a className 2x
*/
function Item({ name, isPacked }: ItemProps) {
  return (
    <li className="item">
      {isPacked ? name + " ✔" : name}
      {/* isPacked, then ( &&) renderiza a marca de seleção, caso contrário, não renderiza nada” .

      Uma expressão JavaScript && retorna o valor do seu lado direito (no nosso caso, a marca de seleção) se o lado esquerdo (nossa condição) for true. Mas se a condição for false, toda a expressão se tornará false. O React considera falseum “buraco” na árvore JSX, assim como nullou undefined, e não renderiza nada em seu lugar.
      */}
      {isPacked && "X"}
    </li>
  );
}
/*
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="item">{name}</li>;
}
*/

/*
Agora, digamos que você queira agrupar o texto do item concluído em outra tag HTML, como <del>riscá-lo. Você pode adicionar ainda mais novas linhas e parênteses para que seja mais fácil aninhar mais JSX em cada um dos casos:
*/
function Item2({ name, isPacked }: ItemProps) {
  return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
        <br />
        <Item2 isPacked={true} name="Space suit" />
        <Item2 isPacked={true} name="Helmet with a golden leaf" />
        <Item2 isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

/*
Armadilha
Não coloque números no lado esquerdo de &&.

Para testar a condição, o JavaScript converte o lado esquerdo em booleano automaticamente. No entanto, se o lado esquerdo for 0, então toda a expressão obtém esse valor ( 0) e o React será renderizado com prazer, 0em vez de nada.

Por exemplo, um erro comum é escrever código como messageCount && <p>New messages</p>. É fácil presumir que ele não renderiza nada quando messageCountis 0, mas na verdade renderiza a 0si mesmo!

Para corrigir isso, torne o lado esquerdo um booleano: messageCount > 0 && <p>New messages</p>.
*/
