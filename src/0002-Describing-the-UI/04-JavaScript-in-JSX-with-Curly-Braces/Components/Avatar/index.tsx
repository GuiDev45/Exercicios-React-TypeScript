export default function Avatar() {
  const avatar = "spider-man-01.JPG";
  const description = "Spider man!";
  return <img className="avatar" src={avatar} alt={description} />;
}

/*
se você quiser especificar dinamicamente o texto src ou alt? Você poderia usar um valor do JavaScript substituindo "and "por {and} :

Observe a diferença entre className="avatar", que especifica um "avatar"nome de classe CSS que torna a imagem redonda e src={avatar}que lê o valor da variável JavaScript chamada avatar. Isso ocorre porque as chaves permitem que você trabalhe com JavaScript ali mesmo na sua marcação!
*/
