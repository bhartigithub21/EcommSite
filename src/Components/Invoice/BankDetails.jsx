import React from "react";

const BankDetails = (props) => {
  const { formData, setFormData, handleValueChange } = props;
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Enter Bank Details
        </h2>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "1rem",
          }}
        >
          <div>
            <label className="block mb-1 font-medium">
              Account Holder Name
            </label>
            <input
              type="text"
              name="accountHolder"
              value={formData.accountHolder}
              onChange={handleValueChange}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Rahul Sharma"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleValueChange}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. 1234567890"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">IFSC Code</label>
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleValueChange}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. HDFC0001234"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Bank Name</label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleValueChange}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. HDFC Bank"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Branch Name</label>
            <input
              type="text"
              name="branchName"
              value={formData.branchName}
              onChange={handleValueChange}
              required
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. MG Road Branch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
