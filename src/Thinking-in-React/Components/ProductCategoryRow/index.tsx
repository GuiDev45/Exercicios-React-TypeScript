export default function ProductCategoryRow({ category }: TProductCategoryRow) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
