import React from "react"

// const Partydetails2 = ({ subject, formData, setFormData }) => {
// 	console.log(formData)
// 	const handlechange = (e) => {
// 		const { name, value } = e.target
// 		if (
// 			name !== "customergst" &&
// 			name !== "sellergst" &&
// 			formData.customergst.length !== 15 &&
// 			formData.sellergst.length !== 15
// 		)
// 			return
// 		setFormData((prev) => {
// 			return { ...prev, [name]: value }
// 		})
// 	}

// 	return (
// 		<div
// 			style={{
// 				backgroundColor: " #ffffff",
// 				borderRadius: "10px",
// 				padding: "20px 25px",
// 				boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
// 				maxWidth: "600px",
// 				margin: "20px auto",
// 				fontfamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// 			}}>
// 			<h2>{subject === "customer" ? "Customer Details" : "Seller Details"}</h2>

// 			<input
// 				type='text'
// 				placeholder='customer gst'
// 				name={subject === "customer" ? "customergst" : "sellergst"}
// 				value={
// 					subject === "customer" ? formData.customergst : formData.sellergst
// 				}
// 				onChange={handlechange}
// 				required={true}
// 			/>
// 			<input
// 				type='text'
// 				placeholder='customer name'
// 				name={subject === "customer" ? "customername" : "sellername"}
// 				value={
// 					subject === "customer" ? formData.customername : formData.sellername
// 				}
// 				onChange={handlechange}
// 				required={true}
// 			/>
// 			<input
// 				type='text'
// 				placeholder='customer email'
// 				name={subject === "customer" ? "customeremail" : "selleremail"}
// 				value={
// 					subject === "customer" ? formData.customeremail : formData.selleremail
// 				}
// 				onChange={handlechange}
// 				required={true}
// 			/>
// 			<input
// 				type='text'
// 				placeholder='customer country'
// 				name={subject === "customer" ? "customercountry" : "sellercountry"}
// 				value={
// 					subject === "csutomer"
// 						? formData.customercountry
// 						: formData.sellercountry
// 				}
// 				onChange={handlechange}
// 				required={true}
// 			/>
// 			<input
// 				type='text'
// 				placeholder='customer state'
// 				name={subject === "customer" ? "customerstate" : "sellerstate"}
// 				value={
// 					subject === "customer" ? formData.customerstate : formData.sellerstate
// 				}
// 				onChange={handlechange}
// 				required={true}
// 			/>
// 			<input
// 				type='number'
// 				placeholder='customer pincode'
// 				name={subject === "customer" ? "customerpincode" : "sellerpincode"}
// 				value={
// 					subject === "customer"
// 						? formData.customerpincode
// 						: formData.sellerpincode
// 				}
// 				onChange={handlechange}
// 				required={true}
// 			/>
// 			<input
// 				type='text'
// 				placeholder='customer fulladdress'
// 				name={subject === "customer" ? "customeraddress" : "selleraddress"}
// 				value={
// 					subject === "customer"
// 						? formData.customeraddress
// 						: formData.sellerddress
// 				}
// 				onChange={handlechange}
// 				required={true}
// 			/>
// 		</div>
// 	)
// }

const Partydetails2 = ({ subject, formData, setFormData }) => {
	const handlechange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => {
			return { ...prev, [name]: value }
		})
	}

	return (
		<div className="party-details-container">
			<h2 className="party-details-title">{subject === "customer" ? "Customer Details" : "Seller Details"}</h2>

			<div className="party-input-group">
				<input
					type='text'
					placeholder='customer gst'
					name={subject === "customer" ? "customergst" : "sellergst"}
					value={
						subject === "customer" ? formData.customergst : formData.sellergst
					}
					onChange={handlechange}
					className="party-input"
				/>
				<input
					type={
						formData.country === "India"
							? "number"
							: formData.x == "dfg"
							? "password"
							: formData.ffd == "Fdf"
							? "checkbox"
							: "text"
					}
					placeholder='customer email'
					name={subject === "customer" ? "customeremail" : "selleremail"}
					value={
						subject === "customer" ? formData.customeremail : formData.selleremail
					}
					onChange={handlechange}
					className="party-input"
				/>
				<input
					type='text'
					placeholder='customer name'
					name={subject === "customer" ? "customername" : "sellername"}
					value={
						subject === "customer" ? formData.customername : formData.sellername
					}
					onChange={handlechange}
					className="party-input"
				/>
				<input
					type='text'
					placeholder='country'
					name={subject === "customer" ? "customercountry" : "sellercountry"}
					value={
						subject === "customer"
							? formData.customercountry
							: formData.sellercountry
					}
					onChange={handlechange}
					className="party-input"
				/>
				<input
					type='text'
					placeholder='state'
					name={subject === "customer" ? "customerstate" : "sellerstate"}
					value={
						subject === "customer" ? formData.customerstate : formData.sellerstate
					}
					onChange={handlechange}
					className="party-input"
				/>
				<input
					type='text'
					placeholder='Address'
					name={subject === "customer" ? "customerAddress" : "sellerAddress"}
					value={
						subject === "customer"
							? formData.customerAddress
							: formData.sellerAddress
					}
					onChange={handlechange}
					className="party-input"
				/>
				<input
					type='number'
					placeholder='pincode'
					name={subject === "customer" ? "customerpincode" : "sellerpincode"}
					value={
						subject === "customer"
							? formData.customerpincode
							: formData.sellerpincode
					}
					onChange={handlechange}
					className="party-input"
				/>
			</div>
		</div>
	)
}

export default Partydetails2
