type recipeProps = {
  drinkers: number;
};

export default function Recipe({ drinkers }: recipeProps) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

/*
Quando possível, tente expressar sua lógica apenas com renderização. Você ficará surpreso com o quão longe isso pode levá-lo!

Recapitular
Um componente deve ser puro, ou seja:
Ele cuida da sua própria vida. Não deve alterar nenhum objeto ou variável que existia antes da renderização.
Mesmas entradas, mesmas saídas. Dadas as mesmas entradas, um componente deve sempre retornar o mesmo JSX.
A renderização pode acontecer a qualquer momento, portanto os componentes não devem depender da sequência de renderização uns dos outros.
Você não deve alterar nenhuma das entradas que seus componentes usam para renderização. Isso inclui adereços, estado e contexto. Para atualizar a tela, “defina” o estado em vez de alterar objetos preexistentes.
Esforce-se para expressar a lógica do seu componente no JSX que você retornar. Quando você precisar “mudar as coisas”, normalmente você desejará fazê-lo em um manipulador de eventos. Como último recurso, você pode useEffect.
Escrever funções puras requer um pouco de prática, mas revela o poder do paradigma do React.
*/
