import React, { useEffect } from "react"

const Partydetails = (props) => {
	const { heading, formData, setFormData, handleValueChange, subject } = props

	const fetchCustomerDetailsFromGSTIN = async (gstin, type) => {
		const response = {
			flag: true,
			data: {
				lgnm: type === "seller" ? "Test Company Pvt. Ltd" : "Ramesh Pvt Ltd",
				pradr: {
					adr:
						type === "seller"
							? "123, MG Road, Delhi"
							: "23, Church Street, Bangalore",
					addr: {
						stcd: type === "seller" ? "Delhi" : "Karnataka",
						pncd: type === "seller" ? "110011" : "560037",
						loc: type === "seller" ? "Delhi" : "Bangalore",
					},
				},
			},
		}

		if (response?.flag) {
			if (type === "customer") {
				setFormData((prev) => ({
					...prev,
					custfullName: response?.data?.lgnm,
					custaddress: response?.data?.pradr?.adr,
					custstcd: response?.data?.pradr?.addr?.stcd,
					custpincode: response?.data?.pradr?.addr?.pncd,
					custlocation: response?.data?.pradr?.addr?.loc,
				}))
			} else {
				setFormData((prev) => ({
					...prev,
					sellerfullName: response?.data?.lgnm,
					selleraddress: response?.data?.pradr?.adr,
					sellerstcd: response?.data?.pradr?.addr?.stcd,
					sellerpincode: response?.data?.pradr?.addr?.pncd,
					sellerlocation: response?.data?.pradr?.addr?.loc,
				}))
			}
		} else {
			alert("Invalid GSTIN")
		}
	}

	useEffect(() => {
		if (formData?.custgstin?.length === 15) {
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
					placeholder='Customer'
					gst
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
					placeholder='Customer name'
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
					placeholder='pincode'
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
	)
}

export default Partydetails
