import React from "react";
import "../Style.css";
import Button from "./Button";

function App() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  function decrementar() {
    setTotal((total) => total - 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button onClick={incrementar}>Incrementar</Button>
      <Button onClick={decrementar}>Decrementar</Button>
    </div>
  );
}

export default App;
