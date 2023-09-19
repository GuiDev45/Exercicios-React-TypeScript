import Avatar from "../Avatar";
import Card from "../Card";

export default function Profile() {
  return (
    <div>
      <Card>
        <Avatar
          size={200}
          person={{
            name: "spider-man-01.JPG",
            imageId: "YfeOqp2",
          }}
        />
      </Card>
      <Card>
        <Avatar
          size={180}
          person={{
            name: "venom-01.JPG",
            imageId: "OKS67lh",
          }}
        />
      </Card>
      <Avatar
        size={150}
        person={{
          name: "carnage-01.JPG",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}

/*
Passar Props para o componente filho que no caso é Avatar

Adicione alguma lógica Avatar que usa os Props person e size para renderização e pronto.
Agora você pode configurar Avatar a renderização de muitas maneiras diferentes com Props diferentes.

Os Props permitem que você pense sobre os componentes pai e filho de forma independente. Por exemplo, você pode alterar os person Props size internos Profile sem ter que pensar em como Avatar usá-los. Da mesma forma, você pode alterar a forma como Avatar usa esses Props, sem olhar para o arquivo Profile.

Você pode pensar em acessórios como “botões” que podem ser ajustados. Eles desempenham a mesma função que os argumentos servem para funções - na verdade, os adereços são o único argumento para o seu componente! As funções do componente React aceitam um único argumento, um propsobjeto:

O valor padrão só é usado se a sizepropriedade estiver faltando ou se você passar size={undefined}. Mas se você passar size={null}ou size={0}, o valor padrão não será usado.
*/
