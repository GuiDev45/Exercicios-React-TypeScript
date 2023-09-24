export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}

/*
Não confunda e.stopPropagation()e e.preventDefault(). Ambos são úteis, mas não estão relacionados:

e.stopPropagation()impede o disparo dos manipuladores de eventos anexados às tags acima.
e.preventDefault() impede o comportamento padrão do navegador para os poucos eventos que o possuem.

Os manipuladores de eventos podem ter efeitos colaterais?
Absolutamente! Os manipuladores de eventos são o melhor lugar para efeitos colaterais.

Ao contrário das funções de renderização, os manipuladores de eventos não precisam ser pure , portanto, é um ótimo lugar para alterar algo — por exemplo, alterar o valor de uma entrada em resposta à digitação ou alterar uma lista em resposta ao pressionamento de um botão. No entanto, para alterar algumas informações, primeiro você precisa de alguma forma de armazená-las. No React, isso é feito usando o estado, a memória de um componente. Você aprenderá tudo sobre isso na próxima página.
*/
