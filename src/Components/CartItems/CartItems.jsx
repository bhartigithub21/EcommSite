import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import AddressForm from "./AddressForm";

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart, deleteFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>

                <div className="cartitems-quantity-control">
                  <button onClick={() => removeFromCart(e.id)}>-</button>
                  <p>{cartItems[e.id]}</p>
                  <button onClick={() => addToCart(e.id)}>+</button>
                </div>

                <p>${e.new_price * cartItems[e.id]}</p>

                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => deleteFromCart[e.id]}
                  alt="remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          gap: "100px",
        }}
      >
        <div style={{ width: "75%" }}>
          <AddressForm />
        </div>
        <div className="cartitems-down">
          <div className="cartitems-total" style={{ width: "500px" }}>
            <h1>Cart Totals</h1>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>
                $
                {all_product.reduce(
                  (total, item) => total + item.new_price * cartItems[item.id],
                  0
                )}
              </p>
            </div>
            <hr />

            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>
                $
                {all_product.reduce(
                  (total, item) => total + item.new_price * cartItems[item.id],
                  0
                )}
              </h3>
            </div>
            <button>PROCEED TO CHECKOUT</button>

            {/* <div className="cartitems-promocode"> */}
            <p>If you have promocode, enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promocode" />
            </div>
            <button
              style={{
                backgroundColor: "black",
                width: "100px",
                margin: "auto",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
