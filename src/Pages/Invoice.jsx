import React, { useState } from "react";
import "./CSS/Invoice.css";
import Partydetails from "../Components/Invoice/Partydetails";
import Itemdetails from "../Components/Invoice/Itemdetails";
import BankDetails from "../Components/Invoice/BankDetails";
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
    items: [{ product: "", quantity: 1, price: 1 }],
    accountHolder: "",
    accountNumber: "",
    ifscCode: "",
  });

  const handleValueChange = (e, index) => {
    const { name, value } = e.target;
    if (name == "product" || name == "quantity" || name == "price") {
      setFormData((prev) => ({
        ...prev,
        items: prev.items.map(
          (el, idx) => (idx = index ? { ...el, [name]: value } : el)
        ),
      }));
    } else setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(formData);
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
      <form onSubmit={handleSubmit}>
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
        <Itemdetails
          formData={formData}
          setFormData={setFormData}
          handleValueChange={handleValueChange}
        />

        <BankDetails
          formData={formData}
          setFormData={setFormData}
          handleValueChange={handleValueChange}
        />

        <button type="submit" className="generate-btn">
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
