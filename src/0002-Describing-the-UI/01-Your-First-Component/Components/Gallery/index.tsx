import Profile from "../Profile";

function Gallery() {
  return (
    <section>
      <h1>Galeria de heróis</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

export default Gallery;

/*
Como os Profile componentes são renderizados internamente Gallery — até mesmo várias vezes! — podemos dizer que Gallery é um componente pai, renderizando cada um Profil como um “filho”. Isso faz parte da magia do React: você pode definir um componente uma vez e depois usá-lo em quantos lugares e quantas vezes quiser.
*/
