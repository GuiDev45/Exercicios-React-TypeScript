import React from "react";
import Input from "./Input";

const Form = () => {
  return (
    <div>
      <form action="">
        <Input id="nome" label="Nome" />
        <Input id="senha" label="Senha" type="password" />
      </form>
    </div>
  );
};

export default Form;
