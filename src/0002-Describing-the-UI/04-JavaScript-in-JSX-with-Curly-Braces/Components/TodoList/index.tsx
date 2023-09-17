export default function TodoList() {
  return (
    <>
      <h1>Spider Man!</h1>
      <img src="spider-man-01.JPG" alt="Picture Spider man" className="photo" />
      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        <li>Superpoderes Aracnídeos</li>
        <li>Identidade Dupla</li>
        <li>Grande Responsabilidade</li>
      </ul>
    </>
  );
}

/*
Usando “double curlies”: CSS e outros objetos em JSX

Em JSX, você pode usar objetos, além de strings e números. Para passar um objeto JavaScript em JSX, coloque o objeto entre dois pares de chaves, como assim: { { name: "Hedy Lamarr", inventions: 5 } }. Isso também se aplica quando você deseja definir estilos CSS diretamente em JSX usando o atributo style.

As propriedades embutidas stylesão escritas em camelCase. Por exemplo, HTML <ul style="background-color: black">seria escrito como <ul style={{ backgroundColor: 'black' }}>  em seu componente.
*/
