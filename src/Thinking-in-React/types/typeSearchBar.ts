type TSearchBar = {
  filterText: string;
  inStockOnly: boolean;
  onFilterTextChange: (text: string) => void;
  onInStockOnlyChange: (text: boolean) => void;
};
