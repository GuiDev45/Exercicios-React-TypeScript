import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

export default function ProductTable({
  products,
  filterText,
  inStockOnly,
}: TProductTable) {
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(filterText.toLowerCase()) &&
      (!inStockOnly || (inStockOnly && product.stocked)),
  );

  const rows = filteredProducts.reduce<JSX.Element[]>(
    (acc, product, index, array) => {
      if (index === 0 || product.category !== array[index - 1].category) {
        acc.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />,
        );
      }
      acc.push(<ProductRow product={product} key={product.name} />);
      return acc;
    },
    [],
  );

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
