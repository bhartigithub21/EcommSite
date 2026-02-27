import React, { useState } from "react"
import "./CSS/Invoice2.css"
import Partydetails from "../Components/Invoice/Partydetails"
import Itemdetails from "../Components/Invoice/Itemdetails"
import BankDetails from "../Components/Invoice/BankDetails"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

// import { yupResolver } from "@hookform/resolvers/yup"
// import * as Yup from "yup"

// import { FormProvider, useForm } from "react-hook-form"

// const validationSchema = Yup.object({
// 	custfullName: Yup.string()
// 		.required("Customer full name is required")
// 		.min(3, "Name must be at least 3 characters"),

// 	custemail: Yup.string()
// 		.email("Invalid email format")
// 		.required("Customer email is required"),

// 	custaddress: Yup.string().required("Customer address is required"),

// 	custgstin: Yup.string()
// 		.matches(/^[0-9A-Z]{15}$/, "Invalid GSTIN")
// 		.required("GSTIN is required"),

// 	custstcd: Yup.string().required("State code is required"),

// 	custpincode: Yup.string()
// 		.matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
// 		.required("Pincode is required"),

// 	sellerfullName: Yup.string()
// 		.required("Seller full name is required")
// 		.min(3, "Name must be at least 3 characters"),

// 	selleremail: Yup.string()
// 		.email("Invalid email format")
// 		.required("Seller email is required"),

// 	selleraddress: Yup.string().required("Seller address is required"),

// 	sellergstin: Yup.string()
// 		.matches(/^[0-9A-Z]{15}$/, "Invalid GSTIN")
// 		.required("GSTIN is required"),

// 	sellerstcd: Yup.string().required("State code is required"),

// 	sellerpincode: Yup.string()
// 		.matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
// 		.required("Pincode is required"),

// 	items: Yup.array()
// 		.of(
// 			Yup.object().shape({
// 				product: Yup.string().required("Product name is required"),
// 				quantity: Yup.number()
// 					.positive("Quantity must be positive")
// 					.integer("Quantity must be an integer")
// 					.required("Quantity is required"),
// 				price: Yup.number()
// 					.positive("Price must be positive")
// 					.required("Price is required"),
// 			})
// 		)
// 		.min(1, "At least one item is required"),

// 	accountHolder: Yup.string().required("Account holder name is required"),

// 	accountNumber: Yup.string()
// 		.matches(/^[0-9]{9,18}$/, "Account number must be 9–18 digits")
// 		.required("Account number is required"),

// 	ifscCode: Yup.string()
// 		.matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code")
// 		.required("IFSC code is required"),

// 	bankName: Yup.string().required("bankName is required"),

// 	branchName: Yup.string().required("branchName is required"),
// })

// const InvoiceForm = () => {
// 	const methods = useForm({ resolver: yupResolver(validationSchema) })

// 	const {
// 		formState: { isValid, isDirty },
// 		handleSubmit,
// 	} = methods

// 	const finalsubmit = () => {
// 		console.log(methods.watch())
// 	}

// 	return (
// 		<div
// 			style={{
// 				width: "90vw",
// 				margin: "auto",
// 				border: "1px solid #ccc",
// 				padding: "20px",
// 				borderRadius: "8px",
// 			}}>
// 			<h2>Invoice Form</h2>
// 			<FormProvider {...methods}>
// 				<form onSubmit={handleSubmit(finalsubmit)}>
// 					<Partydetails heading='Cust info.' subject={"customer"} />
// 					<Partydetails heading='Seller info' subject={"seller"} />
// 					<Itemdetails />
// 					<BankDetails />

// 					<button disabled={!isDirty} type='submit'>
// 						Submit
// 					</button>
// 				</form>
// 			</FormProvider>
// 		</div>
// 	)
// }
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
		addText(
			`Address: ${formData.selleraddress} ${formData.sellerpincode}`,
			14,
			64,
		)
		addText(`${formData.sellerstate}, ${formData.sellercountry}`, 14, 70)

		// Customer Details
		doc.setFontSize(12)
		doc.text("Bill To:", 120, 40)
		doc.setFontSize(10)
		addText(`Name: ${formData.customername}`, 120, 46)
		addText(`Email: ${formData.customeremail}`, 120, 52)
		addText(`GSTIN: ${formData.customergst}`, 120, 58)
		addText(
			`Address: ${formData.customeraddress} ${formData.customerpincode}`,
			120,
			64,
		)
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

		autoTable(doc, {
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
		<div className='invoice-container'>
			<h2 className='invoice-title'>Invoice Form</h2>
			<form onSubmit={handleSubmit} className='invoice-form'>
				<Partydetails
					subject='seller'
					setFormData={setFormData}
					formData={formData}
				/>
				<Partydetails
					subject='customer'
					setFormData={setFormData}
					formData={formData}
				/>
				<BankDetails />

				<Itemdetails formData={formData} setFormData={setFormData} />

				<div
					className='button-container'
					style={{
						display: "flex",
						gap: "10px",
						justifyContent: "center",
						marginTop: "20px",
					}}>
					<button
						type='submit'
						className='submit-btn'
						style={{ padding: "10px 20px" }}>
						Submit & Download
					</button>

					<button
						type='button'
						onClick={handleDownloadPDF}
						className='submit-btn'
						style={{ padding: "10px 20px", backgroundColor: "#4CAF50" }} // distinct color
					>
						Download PDF
					</button>
				</div>
			</form>
		</div>
	)
}

export default Invoice2
