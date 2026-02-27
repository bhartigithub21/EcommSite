import React from "react"
import "./BankDetails.css"
// import { useFormContext } from "react-hook-form"

// const BankDetails = (props) => {
// 	const { register } = useFormContext()
// 	return (
// 		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
// 			<div className='w-full bg-white p-8 rounded-2xl shadow-md'>
// 				<h2 className='text-2xl font-bold text-center mb-6'>
// 					Enter Bank Details
// 				</h2>
// 				<div
// 					style={{
// 						width: "100%",
// 						display: "grid",
// 						gridTemplateColumns: "1fr 2fr",
// 						gap: "1rem",
// 					}}>
// 					<div>
// 						<label className='block mb-1 font-medium'>
// 							Account Holder Name
// 						</label>
// 						<input
// 							type='text'
// 							{...register("accountHolder")}
// 							className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
// 							placeholder='e.g. Rahul Sharma'
// 						/>
// 					</div>

// 					<div>
// 						<label className='block mb-1 font-medium'>Account Number</label>
// 						<input
// 							type='text'
// 							{...register("accountNumber")}
// 							className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
// 							placeholder='e.g. 1234567890'
// 						/>
// 					</div>

// 					<div>
// 						<label className='block mb-1 font-medium'>IFSC Code</label>
// 						<input
// 							type='text'
// 							{...register("ifscCode")}
// 							className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
// 							placeholder='e.g. HDFC0001234'
// 						/>
// 					</div>

// 					<div>
// 						<label className='block mb-1 font-medium'>Bank Name</label>
// 						<input
// 							type='text'
// 							{...register("bankName")}
// 							className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
// 							placeholder='e.g. HDFC Bank'
// 						/>
// 					</div>

// 					<div>
// 						<label className='block mb-1 font-medium'>Branch Name</label>
// 						<input
// 							type='text'
// 							{...register("branchName")}
// 							className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
// 							placeholder='e.g. MG Road Branch'
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

const BankDetails = () => {
	return (
		<div className='bank-details-container'>
			<h2 className='bank-details-title'>Bank Details</h2>
			<div className='bank-input-group'>
				<input
					type='number'
					placeholder='bank account no.'
					name={"accountno"}
					className='bank-input'
				/>
				<input
					type='text'
					placeholder='bank name.'
					name={"bankname"}
					className='bank-input'
				/>
				<input
					type='number'
					placeholder='branch name'
					name={"branchname"}
					className='bank-input'
				/>
				<input
					type='number'
					placeholder='account holder'
					name={"accountholder"}
					className='bank-input'
				/>
			</div>
		</div>
	)
}

export default BankDetails
