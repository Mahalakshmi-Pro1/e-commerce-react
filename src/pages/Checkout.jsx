import { useState } from "react";

function Checkout({ cart, clearCart }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");


  // Calculate total including quantity

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );


  const handleSubmit = (e) => {

    e.preventDefault();


    // Validation

    if (
      name === "" ||
      phone === "" ||
      address === ""
    ) {

      alert("Please fill all the fields");

      return;
    }


    // Order success

    alert("Order placed successfully!");


    // Empty cart

    clearCart();


    // Clear form

    setName("");
    setPhone("");
    setAddress("");
  };


  return (

    <div className="checkout-page">

      <div className="checkout-container">


        {/* Checkout Form */}

        <div className="checkout-form">

          <h1>
            Checkout
          </h1>

          <p className="checkout-subtitle">
            Complete your order
          </p>


          <form onSubmit={handleSubmit}>


            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />


            <label>
              Phone Number
            </label>

            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />


            <label>
              Delivery Address
            </label>

            <textarea
              placeholder="Enter your delivery address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
            />


            <button
              type="submit"
              className="place-order-btn"
            >
              Place Order
            </button>

          </form>

        </div>


        {/* Order Summary */}

        <div className="order-summary">

          <h2>
            Order Summary
          </h2>


          {cart.map((item) => (

            <div
              className="summary-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
              />


              <div>

                <h3>
                  {item.name}
                </h3>

                <p>
                  Rs. {item.price} × {item.quantity}
                </p>

              </div>

            </div>

          ))}


          <div className="summary-total">

            <span>
              Total
            </span>

            <strong>
              Rs. {total}
            </strong>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;