import Button from "./Button";

export default function Product({ product, onToggleProduct, onDeleteProduct }) {
  return (
    <>
      <p>{product.name}</p>
      <p>{product.category}</p>
      <p>{product.notes}</p>
      <p className="quantity">{product.quantity}</p>
      <p>
        <input
          type="checkbox"
          checked={product.isBought}
          onChange={() => {
            onToggleProduct(product.id);
          }}
        ></input>
      </p>
      <Button
        className="btn-delete"
        onClick={() => {
          onDeleteProduct(product.id);
        }}
      >
        ❌
      </Button>
    </>
  );
}
