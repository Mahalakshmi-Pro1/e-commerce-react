import { Link } from "react-router-dom";

function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
}) {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );


  // Empty cart

  if (cart.length === 0) {

    return (

      <div className="empty-cart">

        <div className="empty-cart-box">

          <div className="empty-icon">
            🛒
          </div>

          <h1>
            Your Cart is Empty
          </h1>

          <p>
            Add some products to your cart
            and come back here.
          </p>

          <Link
            to="/"
            className="continue-shopping"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    );
  }


  return (

    <div className="cart-page">

      <h1>
        Shopping Cart
      </h1>


      <div className="cart-layout">


        {/* Products */}

        <div className="cart-products">

          <h2>
            Your Products
          </h2>


          {cart.map((item) => (

            <div
              className="cart-product"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />


              <div className="cart-product-details">

                <h3>
                  {item.name}
                </h3>

                <p className="cart-price">
                  Rs. {item.price}
                </p>


                <div className="quantity-section">

                  <span>
                    Quantity:
                  </span>


                  <div className="counter">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>


                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  🗑 Remove
                </button>

              </div>


              <div className="item-subtotal">

                <span>
                  Subtotal
                </span>

                <strong>
                  Rs. {item.price * item.quantity}
                </strong>

              </div>

            </div>

          ))}

        </div>


        {/* Summary */}

        <div className="cart-summary">

          <h2>
            Order Summary
          </h2>


          <div className="summary-row">

            <span>
              Items
            </span>

            <span>
              {totalItems}
            </span>

          </div>


          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <span>
              Rs. {total}
            </span>

          </div>


          <div className="summary-row">

            <span>
              Delivery
            </span>

            <span className="free">
              FREE
            </span>

          </div>


          <hr />


          <div className="total-row">

            <span>
              Total
            </span>

            <strong>
              Rs. {total}
            </strong>

          </div>


          <Link
            to="/checkout"
            className="checkout-button"
          >
            Proceed to Checkout →
          </Link>


          <Link
            to="/"
            className="continue-link"
          >
            ← Continue Shopping
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Cart;