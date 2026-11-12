import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {

  const [cart, setCart] = useState([]);


  // =========================
  // ADD TO CART
  // =========================

  const addToCart = (product) => {

    setCart((previousCart) => {

      const existingProduct =
        previousCart.find(
          (item) => item.id === product.id
        );


      // Product already exists

      if (existingProduct) {

        return previousCart.map((item) =>

          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }
            : item

        );
      }


      // New product

      return [

        ...previousCart,

        {
          ...product,
          quantity: 1
        }

      ];
    });


    alert(
      `${product.name} added to cart!`
    );
  };


  // =========================
  // INCREASE QUANTITY
  // =========================

  const increaseQuantity = (id) => {

    setCart((previousCart) =>

      previousCart.map((item) =>

        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1
            }
          : item

      )
    );
  };


  // =========================
  // DECREASE QUANTITY
  // =========================

  const decreaseQuantity = (id) => {

    setCart((previousCart) =>

      previousCart
        .map((item) =>

          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1
              }
            : item

        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };


  // =========================
  // REMOVE PRODUCT
  // =========================

  const removeFromCart = (id) => {

    setCart((previousCart) =>

      previousCart.filter(
        (item) => item.id !== id
      )
    );
  };


  // =========================
  // CLEAR CART AFTER ORDER
  // =========================

  const clearCart = () => {

    setCart([]);
  };


  // =========================
  // CART COUNT
  // =========================

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  return (

    <div>

      <Navbar
        cartCount={cartCount}
      />


      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
            />
          }
        />


        {/* CART */}

        <Route
          path="/cart"
          element={

            <Cart
              cart={cart}
              increaseQuantity={
                increaseQuantity
              }
              decreaseQuantity={
                decreaseQuantity
              }
              removeFromCart={
                removeFromCart
              }
            />

          }
        />


        {/* CHECKOUT */}

        <Route
          path="/checkout"
          element={

            <Checkout
              cart={cart}
              clearCart={clearCart}
            />

          }
        />

      </Routes>

    </div>
  );
}

export default App;