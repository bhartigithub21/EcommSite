import React from "react"

const ItemDetails2 = ({ formData, setFormData }) => {
	// const handleadditem = () => {
	// 	setFormData((prev) => {
	// 		return {
	// 			...prev,
	// 			items: [
	// 				...prev.items,
	// 				{ id: Date.now(), product: "", quantity: 0, price: 0 },
	// 			],
	// 		}
	// 	})
	// }
	const handleadditem = () => {
		setFormData((prev) => {
			return {
				...prev,
				items: [
					...prev.items,
					{ id: Date.now(), product: "", quantity: 0, price: 0 },
				],
			}
		})
	}
	console.log(formData)

	// const Removeitem = (id) => {
	// 	setFormData((prev) => {
	// 		return {
	// 			...prev,
	// 			items: prev.items.filter((el) => {
	// 				console.log(id, el.id)

	// 				return el.id != id
	// 			}),
	// 		}
	// 	})
	// }

	const Removeitem = (id) => {
		setFormData((prev) => {
			return {
				...prev,
				items: prev.items.filter((el) => {
					return el.id !== id
				}),
			}
		})
	}

	const handleItemChange = (e, index) => {
		const { name, value } = e.target

		console.log(name, value)

		setFormData((prev) => ({
			...prev,
			items: prev.items.map((el, idx) =>
				idx === index ? { ...el, [name]: value } : el
			),
		}))
	}

	const getTotal = () => {
		return formData.items.reduce((acc, curr) => {
			return acc + curr.quantity * curr.price
		}, 0)
	}

	return (
		<div>
			<h2>Item details</h2>
			{formData.items?.map((el, index) => {
				return (
					<div key={el.id}>
						<input
							type='text'
							placeholder='product'
							name='product'
							onChange={(e) => {
								handleItemChange(e, index)
							}}
						/>
						<input
							type='number'
							placeholder='quantity'
							name='quantity'
							onChange={(e) => {
								handleItemChange(e, index)
							}}
						/>
						<input
							type='number'
							placeholder='price'
							name='price'
							onChange={(e) => {
								handleItemChange(e, index)
							}}
						/>

						<button
							type='button'
							onClick={() => {
								Removeitem(el.id)
							}}>
							Remove Item
						</button>
					</div>
				)
			})}
			<div>
				<button type='button' onClick={handleadditem}>
					Add Item
				</button>
			</div>
			<div>
				<h3>Total: ₹{getTotal()}</h3>
			</div>
		</div>

		// <div>
		// 	<h2>Item Details</h2>

		// 	{formData.items?.map((el, index) => {
		// 		return (
		// 			<div key={el.id}>
		// 				<input
		// 					type='text'
		// 					placeholder='Product'
		// 					name='product'
		// 					onChange={handleItemChange}
		// 					// value={el.product}
		// 				/>
		// 				<input
		// 					type='number'
		// 					placeholder='Quantity'
		// 					name='quantity'
		// 					onChange={handleItemChange}

		// 					// value={el.quantity}
		// 				/>
		// 				<input
		// 					type='number'
		// 					placeholder='Price'
		// 					name='price'
		// 					onChange={handleItemChange}

		// 					// value={el.price}
		// 				/>
		// 				<button
		// 					type='button'
		// 					onClick={() => {
		// 						Removeitem(el.id)
		// 					}}>
		// 					Remove item
		// 				</button>
		// 			</div>
		// 		)
		// 	})}
		// 	<div>
		// 		<button type='button' onClick={handleadditem}>
		// 			add item
		// 		</button>
		// 		<div>
		// 			<h3>{getTotal}</h3>
		// 		</div>
		// 	</div>
		// </div>
	)
}

export default ItemDetails2
