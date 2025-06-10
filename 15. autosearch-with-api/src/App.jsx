import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchterm] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((response) => setProducts(response.recipes))
      .catch((err) => console.log("error occured", err));
  }, []);

  const filteredRecipes = products.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Recipes</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchterm(e.target.value)}
      />
      {/* {searchTerm && ( */}
      <ul>
        {filteredRecipes.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      {/* )} */}
    </div>
  );
}
