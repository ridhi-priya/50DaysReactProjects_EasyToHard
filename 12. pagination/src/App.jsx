import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const fetchProducts = () => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => (data ? setProducts(data.products) : setProducts([])));
  };

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    )
      setPage(selectedPage);
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice((page - 1) * 10, page * 10).map((prod, index) => (
            <span key={index} className="products__single">
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </span>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span 
          className={page > 1 ? "" : "pagination__diabled"}
          onClick={() => selectPageHandler(page - 1)}>◀</span>
          {[...Array(Math.ceil(products.length / 10))].map((_, i) => (
            <span
              onClick={() => selectPageHandler(i + 1)}
              key={i}
              className={page === i + 1 ? "pagination__selected" : ""} // Optional: Add active class for current page
            >
              {i + 1}
            </span>
          ))}
          <span className={page < products.length/ 10 ? "" : "pagination__diabled"} 
          onClick={() => selectPageHandler(page + 1)}>▶</span>
        </div>
      )}
    </div>
  );
}

export default App;
