import { useState } from "react";
import products from "../data/products";

function Home({ addToCart }) {

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>

      {/* Search */}

      <div className="search-container">

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      {/* Products */}

      <div className="product-container">

        {filteredProducts.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <img
              src={product.image}
              alt={product.name}
            />

            <h2>
              {product.name}
            </h2>

            <p>
              Dressing up gets a whole lot easier when
              you know you're slipping into a cute dress.
            </p>

            <div className="price">

              <span className="old-price">
                Rs. {product.oldPrice}
              </span>

              <span className="new-price">
                Rs. {product.price}
              </span>

            </div>

            <button
              onClick={() => addToCart(product)}
            >
              Add Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;