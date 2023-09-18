import Avatar from "../Avatar";

export default function Profile() {
  return (
    <div>
      <Avatar
        size={200}
        person={{
          name: "spider-man-01.JPG",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={180}
        person={{
          name: "venom-01.JPG",
          imageId: "OKS67lh",
        }}
      />
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
*/
