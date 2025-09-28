import React, { useEffect } from "react"

const Partydetails = (props) => {
	const { heading, formData, setFormData, handleValueChange, subject } = props

	const fetchCustomerDetailsFromGSTIN = async (gstin, type) => {
		try {
			const response = {
				flag: true,
				data: {
					lgnm: type === "seller" ? "Test Company Pvt Ltd" : "rahul pvt ltd",
					pradr: {
						adr:
							type === "seller"
								? "123, MG Road, Bengaluru, Karnataka"
								: "45 street, ranchi , swrnarekhanagar ",
						addr: {
							stcd: type === "seller" ? "Delhi" : "jharkhand", // state code
							pncd: type === "seller" ? "560001" : "829103", // pincode
							loc: type === "seller" ? "Bengaluru" : "ranchi", // location
						},
					},
				},
			}
			//   let response = await fetch(
			//     `http://sheet.gstincheck.co.in/check/6b3017024c0bec9b2a31b87558b3cfa8/${gstin}`
			//   );
			//   response = await response.json();
			if (response.flag) {
				if (type === "customer") {
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

	console.log(formData)

	useEffect(() => {
		if (formData?.custgstin?.length === 15) {
			// Fetch customer details using the GSTIN
			fetchCustomerDetailsFromGSTIN(formData?.custgstin, "customer")
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

	useEffect(() => {
		if (formData?.sellergstin?.length === 15) {
			// Fetch customer details using the GSTIN
			fetchCustomerDetailsFromGSTIN(formData?.sellergstin, "seller")
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
	}, [formData?.sellergstin])

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
						placeholder='Customer gst'
						onChange={handleValueChange}
						name={subject === "customer" ? "custgstin" : "sellergstin"}
						value={
							subject === "customer"
								? formData?.custgstin
								: formData?.sellergstin || ""
						}
						required
					/>
					<input
						type='text'
						placeholder='Customer Name'
						name={subject === "customer" ? "custfullName" : "sellerfullName"}
						value={
							subject === "customer"
								? formData?.custfullName
								: formData?.sellerfullName || ""
						}
						readOnly
						required
					/>

					<textarea
						placeholder='Customer Address'
						name={subject === "customer" ? "custaddress" : "selleraddress"}
						value={
							subject === "customer"
								? formData?.custaddress
								: formData?.selleraddress || ""
						}
						readOnly
						required
					/>
					<input
						type='text'
						placeholder='state'
						name={subject === "customer" ? "custstcd" : "sellerstcd"}
						value={
							subject === "customer"
								? formData?.custstcd
								: formData?.sellerstcd || ""
						}
						readOnly
						required
					/>
					<input
						type='text'
						placeholder='pin code'
						name={subject === "customer" ? "custpincode" : "sellerpincode"}
						value={
							subject === "customer"
								? formData?.custpincode
								: formData?.sellerpincode || ""
						}
						readOnly
						required
					/>
				</div>
			</div>
		</div>
	)
}

export default Partydetails
