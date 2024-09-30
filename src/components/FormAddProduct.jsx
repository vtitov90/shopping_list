import { useState } from "react";

export default function FormAddProduct({
  onAddProduct,
  sortBy,
  onSortProducts,
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Fruits");
  const [notes, setNotes] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !category || !quantity) return;

    const newProduct = {
      name,
      category,
      quantity,
      isBought: false,
      id: crypto.randomUUID(),
      notes,
    };

    onAddProduct(newProduct);
    setName("");
    setCategory("Fruits");
    setNotes("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>⊕ Add items</h3>
      <input
        type="text"
        placeholder="Product..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Beverages">Beverages</option>
        <option value="Meat">Meat</option>
        <option value="Cereal">Cereal</option>
        <option value="Baking">Baking</option>
        <option value="Bread & Bakery">Bread & Bakery</option>
      </select>
      <input
        type="text"
        placeholder="Notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <button className="btn">ADD</button>
      <h3>🔍︎ Sort</h3>
      <select
        value={sortBy}
        onChange={(e) => {
          onSortProducts(e.target.value);
        }}
      >
        <option value="input">Input</option>
        <option value="name">Name</option>
        <option value="category">Category</option>
        <option value="quantity">Quantity</option>
        <option value="bought">Bought</option>
      </select>
    </form>
  );
}
