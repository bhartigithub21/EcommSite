import React, { useContext } from "react"
import { cities, countries, states } from "../../constants/address"
import { ShopContext } from "../../Context/ShopContext"
import { useForm } from "react-hook-form"

// import "./AddressForm.css";

export default function AddressForm() {
	// const { addAddress, address } = useContext(ShopContext)

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
	} = useForm()

	console.log(errors)

	const submittingFunction = (data) => {
		console.log(watch())
		console.log(data)
	}

	return (
		<div className='address-container'>
			<div className='address-header'>
				<h1>Shipping Address</h1>
				<p>Please provide your complete delivery details</p>
			</div>

			<form
				onSubmit={handleSubmit(submittingFunction)}
				className='address-form'>
				<div className='form-group'>
					<label>
						Full Name <span className='required'>*</span>
					</label>
					<input
						{...register("fullName", {
							minLength: 1,
							maxLength: 150,
							required: true,
						})}
						type='text'
						placeholder='John Doe'
					/>
				</div>

				<div className='form-group'>
					<label>
						Phone Number <span className='required'>*</span>
					</label>
					<input
						{...register("phoneNumber", {
							required: "Phone is required",
							minLength: {
								value: 10,
								message: "min length should be 10",
							},
							maxLength: {
								value: 10,
								message: "max length should be 10",
							},
						})}
						type='tel'
						placeholder='+91 9876543210'
					/>
					<p style={{ color: "red" }}>{errors?.phoneNumber?.message || ""}</p>
				</div>

				<div className='form-group'>
					<label>Street Address</label>
					<textarea
						{...register("streetAddress", { required: true })}
						rows='2'
						placeholder='House No, Apartment, Street'></textarea>
					<p style={{ color: "red" }}>{errors?.streetAddress?.message}</p>
				</div>

				<div className='form-row'>
					<div className='form-group'>
						<label>Country</label>
						<select
							{...register("country", { required: true })}
							placeholder='India'>
							<option value=''>Select</option>
							{countries.map((el, ind) => (
								<option key={ind} value={el.value}>
									{el.label}
								</option>
							))}
						</select>
						<p style={{ color: "red" }}>{errors?.country?.message}</p>
					</div>
					<div className='form-group'>
						<label>State</label>
						<select {...register("state", { required: true })} id=''>
							<option value=''>Select State</option>
							{states[watch("country")]?.map((el, ind) => (
								<option value={el.value}>{el.label}</option>
							))}
						</select>
						<p style={{ color: "red" }}>
							{errors?.state?.message || errors?.state?.type}
						</p>
					</div>
				</div>

				<div className='form-row'>
					<div className='form-group'>
						<label>City</label>
						<select {...register("city", { required: true })} id=''>
							<option value=''>Select city</option>
							{cities?.[watch("state")]?.map((el, ind) => (
								<option value={el.value}>{el.label}</option>
							))}
						</select>
					</div>
					<div className='form-group'>
						<label>Zip Code</label>
						<input
							{...register("zipCode", { required: true })}
							type='text'
							placeholder='123456'
						/>
					</div>
				</div>

				<div>
					<button disabled={!isValid} type='submit'>
						Save Address
					</button>
				</div>
			</form>
		</div>
	)
}
