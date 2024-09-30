import Product from "./Product";

export default function ProductList({
  products,
  onToggleProduct,
  onDeleteProduct,
  sortBy,
}) {
  let sortedProducts;

  switch (sortBy) {
    case "quantity":
      sortedProducts = products.sort((a, b) => a.quantity - b.quantity);
      break;
    case "category":
      sortedProducts = products.sort((a, b) =>
        a.category.localeCompare(b.category)
      );
      break;
    case "name":
      sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "bought":
      sortedProducts = products.sort(
        (a, b) => Number(a.isBought) - Number(b.isBought)
      );
      break;
    case "input":
    default:
      sortedProducts = products;
  }

  return (
    <div className="products">
      <p>📛 Name</p>
      <p>🏷️ Category</p>
      <p>🧾 Notes</p>
      <p>🍉 Quantity</p>
      <p>✅ Done</p>
      <p>🗑️ Delete</p>
      {sortedProducts.map((product) => (
        <Product
          product={product}
          key={product.id}
          onToggleProduct={onToggleProduct}
          onDeleteProduct={onDeleteProduct}
        />
      ))}
    </div>
  );
}
