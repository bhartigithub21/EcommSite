import React from "react"

const Itemdetails = (props) => {
	const { formData, setFormData, handleValueChange } = props

	const handleAddItem = () => {
		setFormData((prev) => {
			return {
				...prev,
				items: [...prev.items, { product: "", quantity: 1, price: 0 }],
			}
		})
	}

	const handleRemoveItem = (index) => {
		setFormData((prev) => {
			return {
				...prev,
				items: prev.items.filter((el, id) => {
					if (id != index) {
						return el
					}
				}),
			}
		})
	}

	return (
		<div>
			{" "}
			<div className='invoice-items'>
				<h3>Invoice Items</h3>
				{formData?.items?.map((item, index) => (
					<div key={index} className='invoice-item'>
						<input
							type='text'
							name='product'
							placeholder='Product Name'
							value={item.product}
							required
						/>
						<input
							type='number'
							name='quantity'
							placeholder='Qty'
							value={item.quantity}
							required
						/>
						<input
							type='number'
							name='price'
							placeholder='Price'
							value={item.price}
							required
						/>
						<button type='button' onClick={() => handleRemoveItem(index)}>
							❌ Remove
						</button>
					</div>
				))}
				<button type='button' onClick={() => handleAddItem()}>
					➕ Add Item
				</button>
			</div>
		</div>
	)
}

export default Itemdetails
