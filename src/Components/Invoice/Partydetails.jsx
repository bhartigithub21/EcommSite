import React, { useEffect } from "react"
import { useFormContext } from "react-hook-form"

const Partydetails = (props) => {
	const { heading, subject } = props
	const {
		register,
		watch,
		formState: { errors },
	} = useFormContext()

	// console.log(formState.errors)

	// const fetchCustomerDetailsFromGSTIN = async (gstin, type) => {
	// 	const response = {
	// 		flag: true,
	// 		data: {
	// 			lgnm: type === "seller" ? "Test Company Pvt. Ltd" : "Ramesh Pvt Ltd",
	// 			pradr: {
	// 				adr:
	// 					type === "seller"
	// 						? "123, MG Road, Delhi"
	// 						: "23, Church Street, Bangalore",
	// 				addr: {
	// 					stcd: type === "seller" ? "Delhi" : "Karnataka",
	// 					pncd: type === "seller" ? "110011" : "560037",
	// 					loc: type === "seller" ? "Delhi" : "Bangalore",
	// 				},
	// 			},
	// 		},
	// 	}

	// 	if (response?.flag) {
	// 		if (type === "customer") {
	// 			setFormData((prev) => ({
	// 				...prev,
	// 				custfullName: response?.data?.lgnm,
	// 				custaddress: response?.data?.pradr?.adr,
	// 				custstcd: response?.data?.pradr?.addr?.stcd,
	// 				custpincode: response?.data?.pradr?.addr?.pncd,
	// 				custlocation: response?.data?.pradr?.addr?.loc,
	// 			}))
	// 		} else {
	// 			setFormData((prev) => ({
	// 				...prev,
	// 				sellerfullName: response?.data?.lgnm,
	// 				selleraddress: response?.data?.pradr?.adr,
	// 				sellerstcd: response?.data?.pradr?.addr?.stcd,
	// 				sellerpincode: response?.data?.pradr?.addr?.pncd,
	// 				sellerlocation: response?.data?.pradr?.addr?.loc,
	// 			}))
	// 		}
	// 	} else {
	// 		alert("Invalid GSTIN")
	// 	}
	// }

	// useEffect(() => {
	// 	if (formData?.custgstin?.length === 15) {
	// 		fetchCustomerDetailsFromGSTIN(formData?.custgstin, "customer")
	// 	} else {
	// 		setFormData((prev) => ({
	// 			...prev,
	// 			custfullName: "",
	// 			custaddress: "",
	// 			custstcd: "",
	// 			custpincode: "",
	// 			custlocation: "",
	// 		}))
	// 	}
	// }, [formData?.custgstin])

	// useEffect(() => {
	// 	if (formData?.sellergstin?.length === 15) {
	// 		fetchCustomerDetailsFromGSTIN(formData?.sellergstin, "seller")
	// 	} else {
	// 		setFormData((prev) => ({
	// 			...prev,
	// 			sellerfullName: "",
	// 			selleraddress: "",
	// 			sellerstcd: "",
	// 			sellerpincode: "",
	// 			sellerlocation: "",
	// 		}))
	// 	}
	// }, [formData?.sellergstin])

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
					placeholder='Customer gst'
					{...register(subject === "customer" ? "custgstin" : "sellergstin")}
				/>

				<input
					type='text'
					placeholder='Customer name'
					{...register(
						subject === "customer" ? "custfullName" : "sellerfullName"
					)}
				/>

				<textarea
					placeholder='Customer Address'
					{...register(
						subject === "customer" ? "custaddress" : "selleraddress"
					)}
				/>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label htmlFor=''>State</label>
					<input
						type='text'
						placeholder='state'
						{...register(subject === "customer" ? "custstcd" : "sellerstcd")}
					/>
				</div>
				<input
					type='text'
					placeholder='pincode'
					{...register(
						subject === "customer" ? "custpincode" : "sellerpincode"
					)}
				/>
			</div>
		</div>
	)
}

export default Partydetails
