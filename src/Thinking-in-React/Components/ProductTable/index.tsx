import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

// Importa os componentes ProductCategoryRow e ProductRow de arquivos externos

export default function ProductTable({
  products,
  filterText,
  inStockOnly,
}: TProductTable) {
  // Define o componente ProductTable que recebe as propriedades products, filterText e inStockOnly
  // Essas propriedades são tipadas de acordo com o type TProductTable

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(filterText.toLowerCase()) &&
      (!inStockOnly || (inStockOnly && product.stocked)),
  );
  // Filtra os produtos com base nas propriedades filterText e inStockOnly
  // Cria um novo array filteredProducts com os produtos filtrados

  const rows = filteredProducts.reduce<JSX.Element[]>(
    (acc, product, index, array) => {
      // Inicia um processo de redução para criar uma matriz de elementos JSX (linhas da tabela)

      if (index === 0 || product.category !== array[index - 1].category) {
        // Verifica se é o primeiro produto da lista ou pertence a uma categoria diferente do anterior

        acc.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />,
        );
        // Adiciona um elemento JSX ProductCategoryRow à matriz acc para exibir o cabeçalho da categoria
      }

      acc.push(<ProductRow product={product} key={product.name} />);
      // Adiciona um elemento JSX ProductRow à matriz acc para exibir o produto

      return acc;
    },
    [],
  );
  // Conclui o processo de redução e cria a matriz de elementos JSX rows

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
