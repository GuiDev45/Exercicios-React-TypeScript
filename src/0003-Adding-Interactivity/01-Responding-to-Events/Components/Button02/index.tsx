import { ReactNode } from "react";

type alertButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

function Button({ onClick, children }: alertButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar02() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}

/*
Parando a propagação

Os manipuladores de eventos recebem um objeto de evento como único argumento. Por convenção, geralmente é chamado de e, que significa “evento”. Você pode usar este objeto para ler informações sobre o evento.

Esse objeto de evento também permite interromper a propagação. Se quiser evitar que um evento alcance os componentes pais, você precisa chamar e.stopPropagation()como este Buttoncomponente faz:
*/

/*
Ao clicar em um botão:

1) React chama o onClickmanipulador passado para <button>.
2) Esse manipulador, definido em Button, faz o seguinte:
- Chamadas e.stopPropagation(), evitando que o evento borbulhe ainda mais.
- Chama a onClickfunção, que é uma propriedade passada do Toolbarcomponente.
3) Essa função, definida no Toolbarcomponente, exibe o alerta do próprio botão.
4) Como a propagação foi interrompida, o manipulador <div>do pai não é executado.onClick

Como resultado de e.stopPropagation(), clicar nos botões agora mostra apenas um único alerta (de <button>) em vez de dois deles (de <button>e da barra de ferramentas pai <div>). Clicar em um botão não é a mesma coisa que clicar na barra de ferramentas ao redor, portanto, interromper a propagação faz sentido para esta IU.
*/
