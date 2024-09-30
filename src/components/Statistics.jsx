export default function Stats({ products }) {
  const boughtProd = products.filter((product) => product.isBought);
  const percentage = Math.round((boughtProd.length / products.length) * 100);

  return (
    <footer className="footer">
      {percentage === 100 ? (
        <p>You have bought everything! Congratulations 🥳</p>
      ) : (
        <p>
          You have {products.length} products on your list, and you already
          bought {boughtProd.length} ({percentage}%)
        </p>
      )}
    </footer>
  );
}
