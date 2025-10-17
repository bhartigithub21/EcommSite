import React, { useState } from "react"
import "./CSS/Invoice.css"
import Partydetails from "../Components/Invoice/Partydetails"
import Itemdetails from "../Components/Invoice/Itemdetails"
import BankDetails from "../Components/Invoice/BankDetails"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { FormProvider, useForm } from "react-hook-form"

const validationSchema = Yup.object({
	custfullName: Yup.string()
		.required("Customer full name is required")
		.min(3, "Name must be at least 3 characters"),

	custemail: Yup.string()
		.email("Invalid email format")
		.required("Customer email is required"),

	custaddress: Yup.string().required("Customer address is required"),

	custgstin: Yup.string()
		.matches(/^[0-9A-Z]{15}$/, "Invalid GSTIN")
		.required("GSTIN is required"),

	custstcd: Yup.string().required("State code is required"),

	custpincode: Yup.string()
		.matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
		.required("Pincode is required"),

	sellerfullName: Yup.string()
		.required("Seller full name is required")
		.min(3, "Name must be at least 3 characters"),

	selleremail: Yup.string()
		.email("Invalid email format")
		.required("Seller email is required"),

	selleraddress: Yup.string().required("Seller address is required"),

	sellergstin: Yup.string()
		.matches(/^[0-9A-Z]{15}$/, "Invalid GSTIN")
		.required("GSTIN is required"),

	sellerstcd: Yup.string().required("State code is required"),

	sellerpincode: Yup.string()
		.matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
		.required("Pincode is required"),

	items: Yup.array()
		.of(
			Yup.object().shape({
				product: Yup.string().required("Product name is required"),
				quantity: Yup.number()
					.positive("Quantity must be positive")
					.integer("Quantity must be an integer")
					.required("Quantity is required"),
				price: Yup.number()
					.positive("Price must be positive")
					.required("Price is required"),
			})
		)
		.min(1, "At least one item is required"),

	accountHolder: Yup.string().required("Account holder name is required"),

	accountNumber: Yup.string()
		.matches(/^[0-9]{9,18}$/, "Account number must be 9–18 digits")
		.required("Account number is required"),

	ifscCode: Yup.string()
		.matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code")
		.required("IFSC code is required"),
})

const InvoiceForm = () => {
	const methods = useForm({
		resolver: yupResolver(validationSchema),
		defaultValues: {
			customer: {},
			seller: {},
			items: [{ product: "", quantity: 0, price: 0 }],
			accountHolder: "",
			accountNumber: "",
			ifscCode: "",
		},
	})
	const handleSubmit = (e) => {
		// console.log(formData)
	}

	return (
		<div
			style={{
				width: "90vw",
				margin: "auto",
				border: "1px solid #ccc",
				padding: "20px",
				borderRadius: "8px",
			}}>
			<h2>Invoice Form</h2>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit}>
					<Partydetails heading='Cust info.' subject={"customer"} />
					<Partydetails heading='Seller info' subject={"seller"} />
					<Itemdetails />
					<BankDetails />

					<button type='submit' className='generate-btn'>
						Genarate Invoice
					</button>
				</form>
			</FormProvider>
		</div>
	)
}

export default InvoiceForm
