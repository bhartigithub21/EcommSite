import React, { useState } from "react"
import "./CSS/Invoice.css"
import Partydetails from "../Components/Invoice/Partydetails"
import Itemdetails from "../Components/Invoice/Itemdetails"
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
		items: [],
	})

	const handleValueChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	return (
		<div
			style={{
				// maxWidth: "800px",
				width: "90vw",
				margin: "auto",
				border: "1px solid #ccc",
				padding: "20px",
				borderRadius: "8px",
			}}>
			<h2>Invoice Form</h2>
			<form>
				{/* Customer Details */}
				<Partydetails
					heading='cust info.'
					setFormData={setFormData}
					formData={formData}
					handleValueChange={handleValueChange}
					subject={"customer"}
				/>

				{/* seller Details */}
				<Partydetails
					heading='seller info.'
					setFormData={setFormData}
					formData={formData}
					handleValueChange={handleValueChange}
					subject={"seller"}
				/>
				<Itemdetails
					formData={formData}
					setFormData={setFormData}
					handleValueChange={handleValueChange}
				/>

				{/* Items */}

				{/* Total */}
				<div className='invoice-total'>
					{/* <h3>Total: ${getTotal().toFixed(2)}</h3> */}
				</div>
				<button type='submit' className='generate-btn'>
					Generate Invoice
				</button>
			</form>
		</div>
	)
}

export default InvoiceForm
