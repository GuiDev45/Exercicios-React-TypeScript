import style from "./Profile.module.scss";

function Profile() {
  return (
    <img
      className={style.avatar}
      src="spier-man-01.JPG"
      alt="Spider-man Picture"
    />
  );
}

export default Profile;

/*
adicionar marcação
O componente retorna uma <img />tag com atributos src e alt. <img />é escrito como HTML, mas na verdade é JavaScript nos bastidores! Essa sintaxe é chamada JSX e permite incorporar marcação dentro do JavaScript.

As instruções de retorno podem ser escritas em uma linha, como neste componente:
*/
