export const people = [
  {
    id: 0, // Used in JSX as a key
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1, // Used in JSX as a key
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2, // Used in JSX as a key
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3, // Used in JSX as a key
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4, // Used in JSX as a key
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

/*
As chaves informam ao React a qual item do array cada componente corresponde, para que ele possa combiná-los mais tarde. Isso se torna importante se os itens do seu array puderem ser movidos (por exemplo, devido à classificação), serem inseridos ou excluídos. Uma escolha bem escolhida keyajuda o React a inferir o que exatamente aconteceu e a fazer as atualizações corretas na árvore DOM.

Em vez de gerar chaves dinamicamente, você deve incluí-las em seus dados:

Onde conseguir o seu key 
Diferentes fontes de dados fornecem diferentes fontes de chaves:

Dados de um banco de dados: se seus dados vierem de um banco de dados, você poderá usar as chaves/IDs do banco de dados, que são exclusivos por natureza.
Dados gerados localmente: se seus dados forem gerados e persistidos localmente (por exemplo, notas em um aplicativo de anotações), use um contador de incremento crypto.randomUUID()ou um pacote, como uuidao criar itens.
*/
