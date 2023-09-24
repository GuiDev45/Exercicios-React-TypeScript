import { people } from "../../data";
import { getImageUrl } from "../../utils";

export default function List02() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person) => (
    <li>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

/*
Filtrando matrizes de itens

Digamos que você queira mostrar apenas às pessoas cuja profissão seja 'chemist'. Você pode usar o método JavaScript filter()para retornar apenas essas pessoas. Este método pega um array de itens, passa-os por um “teste” (uma função que retorna trueor false) e retorna um novo array apenas com os itens que passaram no teste (retornados true).

Você só quer os itens onde professionestá 'chemist'. A função de “teste” para isso se parece com (person) => person.profession === 'chemist'. Veja como montar tudo:

1) Crie uma nova matriz apenas de pessoas “químicas”, chemistschamando filter()a peoplefiltragem por person.profession === 'chemist':
const chemists = people.filter(person =>
  person.profession === 'chemist'
);

2) Agora mapeiechemists : _
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);

3) Por último, retorne o listItemsdo seu componente:
return <ul>{listItems}</ul>;

Observação
Elementos JSX diretamente dentro de uma map()chamada sempre precisam de chaves!

*/
