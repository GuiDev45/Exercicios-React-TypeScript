import React from "react";

// React.ComponentProps<"input"> é uma maneira de obter o tipo das propriedades aceitas por um componente <input> embutido no JSX, usando TypeScript.  basicamente criando elementos do React usando uma sintaxe semelhante a HTML. Por exemplo: <input type="text" /> ou seja  é uma utilidade do TypeScript que permite inferir automaticamente o tipo de todas as propriedades aceitas pelo componente <input>
type InputProps = React.ComponentProps<"input"> & {
  label: string;
  id: string;
};

const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {/* Lembrando que se usar o type diferente em App não tem problema, porque o react sobreescreve o que vem antes.*/}
      <input id={id} name={id} type="text" {...props} />
    </div>
  );
};

export default Input;
