import React, { useState } from "react";
import "./CSS/Invoice.css";
import Partydetails from "../Components/Invoice/Partydetails";
// import { customers } from "../Components/Assets/invoice_assets";

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    custfullName: "",
    custemail: "",
    custaddress: "",
    custgstin: "",
    custstcd: "",
    custpincode: "",
    sellerfullName: "",
    selleremail: "",
    selleraddress: "",
    sellergstin: "",
    sellerstcd: "",
    sellerpincode: "",
  });

  const [items, setItems] = useState([{ product: "", quantity: 1, price: 0 }]);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      style={{
        // maxWidth: "800px",
        width: "90vw",
        margin: "auto",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>Invoice Form</h2>
      <form>
        {/* Customer Details */}
        <Partydetails
          heading="cust info."
          setFormData={setFormData}
          formData={formData}
          handleValueChange={handleValueChange}
          subject={"customer"}
        />

        {/* seller Details */}
        <Partydetails
          heading="seller info."
          setFormData={setFormData}
          formData={formData}
          handleValueChange={handleValueChange}
          subject={"seller"}
        />

        {/* Items */}
        <div className="invoice-items">
          <h3>Invoice Items</h3>
          {items.map((item, index) => (
            <div key={index} className="invoice-item">
              <input
                type="text"
                name="product"
                placeholder="Product Name"
                value={item.product}
                required
              />
              <input
                type="number"
                name="quantity"
                min="1"
                placeholder="Qty"
                value={item.quantity}
                required
              />
              <input
                type="number"
                name="price"
                min="0"
                step="0.01"
                placeholder="Price"
                value={item.price}
                required
              />
              <button type="button" onClick={() => null}>
                ❌ Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={() => null}>
            ➕ Add Item
          </button>
        </div>
        {/* Total */}
        <div className="invoice-total">
          {/* <h3>Total: ${getTotal().toFixed(2)}</h3> */}
        </div>
        <button type="submit" className="generate-btn">
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
