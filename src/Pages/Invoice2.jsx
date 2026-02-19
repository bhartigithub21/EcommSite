import React, { useState } from "react"
import Partydetails2 from "../Components/Invoice/Partydetails2"
import Bankdetails2 from "../Components/Invoice/Bankdetails2"
import ItemDetails2 from "../Components/Invoice/ItemDetails2"
import "./CSS/Invoice2.css"

const Invoice2 = () => {
	const [formData, setFormData] = useState({
		customergst: "",
		customername: "",
		customeremail: "",
		customercountry: "",
		customerstate: "",
		customerpincode: "",
		customeraddress: "",
		sellergst: "",
		sellername: "",
		selleremail: "",
		sellercountry: "",
		sellerstate: "",
		sellerpincode: "",
		selleraddress: "",
		items: [{ id: Date.now(), product: "", quantity: 0, price: 0 }],
	})
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log()
	}
	return (
		<div className="invoice-container">
			<h2 className="invoice-title">Invoice Form</h2>
			<form onSubmit={handleSubmit} className="invoice-form">
				<Partydetails2
					subject='seller'
					setFormData={setFormData}
					formData={formData}
				/>
				<Partydetails2
					subject='customer'
					setFormData={setFormData}
					formData={formData}
				/>
				<Bankdetails2 />

				<ItemDetails2 formData={formData} setFormData={setFormData} />

				<button
					type='Submit'
					className="submit-btn">
					Submit
				</button>
			</form>
		</div>
	)
}
// const Invoice2 = () => {
// 	const [formData, setFormData] = useState({})

// 	const handleSubmit = (e) => {
// 		e.preventDefault()
// 	}

// 	return (
// 		<div style={{}}>
// 			<h2>Ivoice Form</h2>
// 			<form onSubmit={handleSubmit}>
// 				<Partydetails2
// 					subject='seller'
// 					formData={formData}
// 					setFormData={setFormData}
// 				/>
// 				<Partydetails2
// 					subject='customer'
// 					formData={formData}
// 					setFormData={setFormData}
// 				/>
// 				<Bankdetails2 />
// 				<ItemDetails2 formData={formData} setFormData={setFormData} />
// 				<button type='submit'>Submit</button>
// 			</form>
// 		</div>
// 	)
// }

export default Invoice2
