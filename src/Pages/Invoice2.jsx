import React, { useState } from "react"
import Partydetails2 from "../Components/Invoice/Partydetails2"
import Bankdetails2 from "../Components/Invoice/Bankdetails2"
import ItemDetails2 from "../Components/Invoice/ItemDetails2"
import "./CSS/Invoice2.css"
import jsPDF from "jspdf"
import "jspdf-autotable"

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

	const handleDownloadPDF = () => {
		const doc = new jsPDF()

		// Helper function to add text if it exists
		const addText = (text, x, y) => {
			if (text) doc.text(text, x, y)
		}

		// Title
		doc.setFontSize(20)
		doc.text("INVOICE", 105, 20, null, null, "center")

		// Seller Details
		doc.setFontSize(12)
		doc.text("Seller Details:", 14, 40)
		doc.setFontSize(10)
		addText(`Name: ${formData.sellername}`, 14, 46)
		addText(`Email: ${formData.selleremail}`, 14, 52)
		addText(`GSTIN: ${formData.sellergst}`, 14, 58)
		addText(`Address: ${formData.selleraddress} ${formData.sellerpincode}`, 14, 64)
		addText(`${formData.sellerstate}, ${formData.sellercountry}`, 14, 70)


		// Customer Details
		doc.setFontSize(12)
		doc.text("Bill To:", 120, 40)
		doc.setFontSize(10)
		addText(`Name: ${formData.customername}`, 120, 46)
		addText(`Email: ${formData.customeremail}`, 120, 52)
		addText(`GSTIN: ${formData.customergst}`, 120, 58)
		addText(`Address: ${formData.customeraddress} ${formData.customerpincode}`, 120, 64)
		addText(`${formData.customerstate}, ${formData.customercountry}`, 120, 70)


		// Items Table
		const tableColumn = ["Product", "Quantity", "Price", "Total"]
		const tableRows = []

		let grandTotal = 0

		formData.items.forEach((item) => {
			const total = item.quantity * item.price
			grandTotal += total
			const itemData = [
				item.product,
				item.quantity,
				item.price,
				total.toFixed(2),
			]
			tableRows.push(itemData)
		})

		doc.autoTable({
			head: [tableColumn],
			body: tableRows,
			startY: 80,
		})

		// Total
		const finalY = doc.lastAutoTable.finalY || 80
		doc.text(`Grand Total: ${grandTotal.toFixed(2)}`, 14, finalY + 10)

		// Bank Details (Static for now as per Bankdetails2 component usually handling display, but we can add placeholders or if they were in state)
        // If Bank details are static in the component, we might need to hardcode or lift state. 
        // For now, I'll assume they aren't in formData based on previous view_file. 
        // Checking Bankdetails2, it looks like it might just be a static form or disconnected.
        // If it's just inputs not connected to formData, they won't print. 
        // But the user asked for "any file... pdf", so I'm focusing on the data we HAVE in formData.

		doc.save("invoice.pdf")
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(formData)
        handleDownloadPDF() // Auto download on submit? Or distinct button. I'll add a distinct button as well.
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

				<div className="button-container" style={{display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px'}}>
					<button
						type='submit'
						className="submit-btn"
                        style={{padding: '10px 20px'}}
                    >
						Submit & Download
					</button>

                    <button
                        type="button"
                        onClick={handleDownloadPDF}
                        className="submit-btn"
                        style={{padding: '10px 20px', backgroundColor: '#4CAF50'}} // distinct color
                    >
                        Download PDF
                    </button>
				</div>
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
