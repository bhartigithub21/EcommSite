import React, { useState } from "react";
import "./CSS/Invoice.css";
// import { customers } from "../Components/Assets/invoice_assets";

const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    gstin: "",
    stcd: "",
    pincode: "",
  });

  const [items, setItems] = useState([{ product: "", quantity: 1, price: 0 }]);

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.length === 15) {
      // Fetch customer details using the GSTIN
      fetchCustomerDetailsFromGSTIN(value);
    } else {
      setFormData((prev) => {
        return { ...prev, fullName: "", address: "", stcd: "", pincode: "" };
      });
    }
  };

  console.log(formData);

  const fetchCustomerDetailsFromGSTIN = async (gstin) => {
    try {
      let response = await fetch(
        `http://sheet.gstincheck.co.in/check/6b3017024c0bec9b2a31b87558b3cfa8/${gstin}`
      );
      response = await response.json();
      if (response.flag) {
        console.log(response);
        setFormData((prev) => ({
          ...prev,
          fullName: response?.data?.lgnm,
          address: response?.data?.pradr.adr,
          stcd: response?.data?.pradr?.addr?.stcd,
          pincode: response?.data?.pradr?.addr?.pncd,
        }));
      } else {
        alert("Invalid GSTIN");
      }
    } catch (error) {}
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
        <div className="customer-info">
          <h3>Customer Information</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "30px",
            }}
          >
            <input
              type="text"
              name="gstin"
              placeholder="Customer gst"
              onChange={handleValueChange}
              value={formData.gstin || ""}
              required
            />
            <input
              type="text"
              name="fullName"
              placeholder="Customer Name"
              value={formData.fullName || ""}
              readOnly
              required
            />

            <textarea
              name="address"
              placeholder="Customer Address"
              value={formData.address || ""}
              readOnly
              required
            />
            <input
              type="text"
              name="stcd"
              placeholder="state"
              value={formData.stcd || ""}
              readOnly
              required
            />
            <input
              type="text"
              name="pincode"
              placeholder="pin code"
              value={formData.pincode || ""}
              readOnly
              required
            />
          </div>
        </div>

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
