import ProductTable from "../ProductTable";
import SearchBar from "../SearchBar";

export default function FilterableProductTable({
  products,
}: TFilterableProductTable) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
