/*
Você pode fazer com que ele mostre uma mensagem quando um usuário clicar seguindo estas três etapas:

1) Declare uma função chamada handleClick dentro do seu Buttoncomponente.
2) Implemente a lógica dentro dessa função (use alertpara mostrar a mensagem).
3) Adicione onClick={handleClick}ao <button>JSX.
*/

export default function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}

/*
Você definiu a handleClickfunção e depois a passou como uma propriedade para <button>.  handleClické um manipulador de eventos. Funções do manipulador de eventos:

A) Geralmente são definidos dentro de seus componentes.
B) Tenha nomes que comecem com handle, seguidos do nome do evento.

Por convenção, é comum nomear manipuladores de eventos seguidos handledo nome do evento. Você verá frequentemente onClick={handleClick}, onMouseEnter={handleMouseEnter}e assim por diante.

Alternativamente, você pode definir um manipulador de eventos embutido no JSX:

<button onClick={function handleClick() {
  alert('You clicked me!');
}}>

Ou, de forma mais concisa, usando uma função de seta:

<button onClick={() => {
  alert('You clicked me!');
}}>

Todos esses estilos são equivalentes. Manipuladores de eventos embutidos são convenientes para funções curtas.
*/

/*
Armadilha

As funções passadas para manipuladores de eventos devem ser passadas, não chamadas. Por exemplo:

passando uma função (correto)	--- chamando uma função (incorreto)
<button onClick={handleClick}> --- <button onClick={handleClick()}>
*/

/*
A diferença é sutil. No primeiro exemplo, a handleClickfunção é passada como um onClickmanipulador de eventos. Isso diz ao React para lembrar disso e só chamar sua função quando o usuário clicar no botão.

No segundo exemplo, o ()at end of handleClick()dispara a função imediatamente durante a renderização , sem nenhum clique. Isso ocorre porque o JavaScript dentro do JSX {é} executado imediatamente.

Quando você escreve código inline, a mesma armadilha se apresenta de uma maneira diferente:

passando uma função (correto) ---	chamando uma função (incorreto)
<button onClick={() => alert('...')}> ---	<button onClick={alert('...')}>

Passar código embutido como este não será acionado ao clicar - ele será acionado sempre que o componente for renderizado:
*/
