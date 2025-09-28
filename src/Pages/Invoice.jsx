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

  const getTotal = () => {
    return (
      formData?.items?.reduce((acc, curr) => {
        return acc + curr?.quantity * curr?.price;
      }, 0) || 0
    );
  };

  const handleValueChange = (e, index) => {
    const { name, value } = e.target;
    if (name == "product" || name == "quantity" || name == "price") {
      setFormData((prev) => {
        return {
          ...prev,
          items: prev.items?.map((el, idx) => {
            if (idx == index) {
              return { ...el, [name]: value };
            } else {
              return el;
            }
          }),
        };
      });
    } else setFormData((prev) => ({ ...prev, [name]: value }));
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

        {/* Total */}
        <div className="invoice-total">
          <h3>Total: ₹ {getTotal()}</h3>
        </div>

        <button type="submit" className="generate-btn">
          Generate Invoice
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
