import React, { useEffect } from "react"

const Partydetails = (props) => {
	const { heading, formData, setFormData, handleValueChange, subject } = props
	const fetchCustomerDetailsFromGSTIN = async (gstin) => {
		try {
			let response = await fetch(
				`http://sheet.gstincheck.co.in/check/6b3017024c0bec9b2a31b87558b3cfa8/${gstin}`
			)
			response = await response.json()
			if (response.flag) {
				console.log(response)
				if (subject == "customer") {
					setFormData((prev) => ({
						...prev,

						custfullName: response?.data?.lgnm,
						custaddress: response?.data?.pradr.adr,
						custstcd: response?.data?.pradr?.addr?.stcd,
						custpincode: response?.data?.pradr?.addr?.pncd,
						custlocation: response?.data?.pradr?.addr?.loc,
					}))
				} else {
					setFormData((prev) => ({
						...prev,

						sellerfullName: response?.data?.lgnm,
						selleraddress: response?.data?.pradr.adr,
						sellerstcd: response?.data?.pradr?.addr?.stcd,
						sellerpincode: response?.data?.pradr?.addr?.pncd,
						sellerlocation: response?.data?.pradr?.addr?.loc,
					}))
				}
			} else {
				alert("Invalid GSTIN")
			}
		} catch (error) {}
	}

	useEffect(() => {
		if (formData?.gstin?.length === 15) {
			// Fetch customer details using the GSTIN
			fetchCustomerDetailsFromGSTIN(formData?.gstin)
		} else {
			setFormData((prev) => ({
				...prev,

				custfullName: "",
				custaddress: "",
				custstcd: "",
				custpincode: "",
				custlocation: "",
			}))
		}
	}, [formData?.custgstin])
	return (
		<div>
			<div className='customer-info'>
				<h3>{heading}</h3>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "30px",
					}}>
					<input
						type='text'
						name='gstin'
						placeholder='Customer gst'
						onChange={handleValueChange}
						value={formData.gstin || ""}
						required
					/>
					<input
						type='text'
						name='fullName'
						placeholder='Customer Name'
						value={formData.fullName || ""}
						readOnly
						required
					/>

					<textarea
						name='address'
						placeholder='Customer Address'
						value={formData.address || ""}
						readOnly
						required
					/>
					<input
						type='text'
						name='stcd'
						placeholder='state'
						value={formData.stcd || ""}
						readOnly
						required
					/>
					<input
						type='text'
						name='pincode'
						placeholder='pin code'
						value={formData.pincode || ""}
						readOnly
						required
					/>
					<input
						type='text'
						name='location'
						placeholder='loc'
						value={formData.location || ""}
						readOnly
						required
					/>
				</div>
			</div>
		</div>
	)
}

export default Partydetails
