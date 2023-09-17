export default function TodoList() {
  return (
    <>
      <h1>Spider Man!</h1>
      <img src="spider-man-01.JPG" alt="Picture Spider man" className="photo" />
      <ul>
        <li>Superpoderes Aracnídeos</li>
        <li>Identidade Dupla</li>
        <li>Grande Responsabilidade</li>
      </ul>
    </>
  );
}

/*
1. Retorne um único elemento raiz
Para retornar vários elementos de um componente, envolva-os com uma única tag pai.

2. Feche todas as tags
JSX exige que as tags sejam explicitamente fechadas: tags de fechamento automático como <img>devem se tornar <img />e tags de empacotamento como <li>orangesdevem ser escritas como <li>oranges</li>.

Os componentes do React agrupam a lógica de renderização junto com a marcação porque estão relacionados.
JSX é semelhante ao HTML, com algumas diferenças. Você pode usar um conversor se precisar.
As mensagens de erro geralmente apontam a direção certa para corrigir sua marcação.

Resumo
JSX é uma sintaxe, uma extensão da linguagem JavaScript que permite incorporar código HTML em JavaScript de forma mais conveniente, tornando a criação de interfaces de usuário em frameworks como o React mais simples e legível.
*/
