const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export default function List01() {
  const listItems = people.map((person) => <li>{person}</li>);
  return <ul>{listItems}</ul>;
}

/*
Renderizando dados de arrays

A única diferença entre esses itens da lista é o seu conteúdo, os seus dados. Freqüentemente, você precisará mostrar várias instâncias do mesmo componente usando dados diferentes ao construir interfaces: desde listas de comentários até galerias de imagens de perfil. Nessas situações, você pode armazenar esses dados em objetos e arrays JavaScript e usar métodos como map()e filter()para renderizar listas de componentes a partir deles.

Aqui está um pequeno exemplo de como gerar uma lista de itens de um array:

1) Mova os dados para um array:
const people = [
  'Creola Katherine Johnson: mathematician',
  ...
];

2) Mapeie os peoplemembros em uma nova matriz de nós JSX listItems:
const listItems = people.map(person => <li>{person}</li>);

3) Retorne listItems do seu componente envolvido em um <ul>:
return <ul>{listItems}</ul>;

*/
