type avatarProps = {
  person: {
    name: string;
    imageId: string;
  };
  size: number;
};

/*
para usar quando nenhum valor for especificado
function Avatar({ person, size = 100 }) {
  // ...
}

Agora, se <Avatar person={...} />for renderizado sem size prop, size será definido como 100.
*/

// Esta sintaxe é chamada de “desestruturação” e equivale à leitura de propriedades de um parâmetro de função:
// Normalmente você não precisa do propsobjeto inteiro, então você o desestrutura em adereços individuais.
export default function Avatar({ person, size }: avatarProps) {
  return (
    <img
      className="avatar"
      src={person.name}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

/*
Observação
Se as chaves duplas person=confundirem você, lembre-se de que elas são apenas um objeto dentro das curvas JSX.
*/
