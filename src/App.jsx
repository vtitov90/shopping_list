import { useState } from "react";
import Logo from "./components/Logo";
import FormAddProduct from "./components/FormAddProduct";
import Stats from "./components/Statistics";
import ProductList from "./components/ProductList";

const shoppingCartItems = [
  {
    name: "Apple 🍎",
    category: "Fruits",
    quantity: 1,
    isBought: false,
    id: 1,
    notes: "Buy organic if possible",
  },
  {
    name: "Banana 🍌",
    category: "Fruits",
    quantity: 1,
    isBought: false,
    id: 2,
    notes: "Get slightly underripe for longer shelf life",
  },
  {
    name: "Beer 🍺",
    category: "Beverages",
    quantity: 5,
    isBought: true,
    id: 3,
    notes: "Local craft beer, IPA preferred",
  },
  {
    name: "Bread 🍞",
    category: "Cereal",
    quantity: 1,
    isBought: false,
    id: 6,
    notes: "Whole grain, sliced",
  },
  {
    name: "Butter 🧈",
    category: "Baking",
    quantity: 1,
    isBought: false,
    id: 7,
    notes: "Unsalted for baking",
  },
  {
    name: "Carrot 🥕",
    category: "Vegetables",
    quantity: 1,
    isBought: true,
    id: 8,
    notes: "Organic, with greens if possible",
  },
  {
    name: "Cereals 🥣",
    category: "Cereal",
    quantity: 1,
    isBought: false,
    id: 9,
    notes: "Low sugar option",
  },
  {
    name: "Chicken legs 🍗",
    category: "Meat",
    quantity: 1,
    isBought: false,
    id: 10,
    notes: "Free-range if available",
  },
  {
    name: "Cookies 🍪",
    category: "Bread & Bakery",
    quantity: 1,
    isBought: false,
    id: 11,
    notes: "Chocolate chip, small pack",
  },
];

function App() {
  const [products, setProducts] = useState(shoppingCartItems);
  const [sortBy, setSortBy] = useState("input");
  function handleAddProduct(product) {
    setProducts((products) => [...products, product]);
  }

  function handleSortProducts(sorting) {
    setSortBy(sorting);
  }

  function handleToggleProduct(id) {
    setProducts((products) =>
      products.map((product) =>
        product.id === id
          ? { ...product, isBought: !product.isBought }
          : product
      )
    );
  }

  function handleDeleteProduct(id) {
    setProducts((products) => products.filter((product) => product.id !== id));
  }

  return (
    <div className="shopping-cart">
      <Logo />
      <FormAddProduct
        onAddProduct={handleAddProduct}
        sortBy={sortBy}
        onSortProducts={handleSortProducts}
      />
      <ProductList
        products={products}
        onToggleProduct={handleToggleProduct}
        onDeleteProduct={handleDeleteProduct}
        sortBy={sortBy}
      />
      <Stats products={products} />
    </div>
  );
}

export default App;
