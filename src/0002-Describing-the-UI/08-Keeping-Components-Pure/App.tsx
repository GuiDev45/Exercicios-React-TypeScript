import Recipe from "./Components";

function App() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

export default App;

/*
Pureza: Componentes como fórmulas
Na ciência da computação (e especialmente no mundo da programação funcional), uma função pura é uma função com as seguintes características:

Ele cuida da sua própria vida. Ele não altera nenhum objeto ou variável que existia antes de ser chamado.
Mesmas entradas, mesmas saídas. Dadas as mesmas entradas, uma função pura deve sempre retornar o mesmo resultado.
Você já deve estar familiarizado com um exemplo de funções puras: fórmulas matemáticas.

Considere esta fórmula matemática: y = 2 x .

Se x = 2 então y = 4 . Sempre.

Se x = 3 então y = 6 . Sempre.

Se x = 3 , às vezes y não será 9 , –1 ou 2,5 , dependendo da hora do dia ou do estado do mercado de ações.

Se y = 2 x e x = 3 , y será sempre 6 .

Se transformássemos isso em uma função JavaScript, ficaria assim:

function double(number) {
  return 2 * number;
}

No exemplo acima, doubleé uma função pura. Se você passar 3, ele retornará 6. Sempre.

O React foi projetado em torno desse conceito. O React assume que cada componente que você escreve é uma função pura. Isso significa que os componentes React que você escreve devem sempre retornar o mesmo JSX com as mesmas entradas:
*/
