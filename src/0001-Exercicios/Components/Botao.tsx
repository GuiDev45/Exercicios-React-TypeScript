const Botao = () => {
  const handleClick = () => {
    alert("Alerta !!!");
  };

  return (
    <>
      <button onClick={handleClick}>Botão</button>
    </>
  );
};

export default Botao;
