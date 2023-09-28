import FilterableProductTable from "./Components/FilterableProductTable";
import { PRODUCTS } from "./data/PRODUCTS";

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
