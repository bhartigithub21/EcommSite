import React from "react"

const Itemdetails = ({ formData, setFormData }) => {
	const getTotal = () => {
		return (
			formData?.items?.reduce((acc, curr) => {
				return acc + (Number(curr?.quantity) || 0) * (Number(curr?.price) || 0)
			}, 0) || 0
		)
	}

	const handleValueChange = (e, index) => {
		const { name, value } = e.target
		const updatedItems = [...formData.items]
		updatedItems[index][name] = value
		setFormData({ ...formData, items: updatedItems })
	}

	const handleRemoveItem = (index) => {
		const updatedItems = formData.items.filter((_, i) => i !== index)
		setFormData({ ...formData, items: updatedItems })
	}

	const handleAddItem = () => {
		setFormData({
			...formData,
			items: [
				...formData.items,
				{ id: Date.now(), product: "", quantity: 0, price: 0 },
			],
		})
	}

	return (
		<div>
			<div className='invoice-items'>
				<h3>Invoice Items</h3>
				{formData?.items?.map((item, index) => (
					<div key={item.id || index} className='invoice-item'>
						<input
							type='text'
							name='product'
							placeholder='Product Name'
							value={item.product}
							onChange={(e) => handleValueChange(e, index)}
							required
						/>
						<input
							type='number'
							name='quantity'
							placeholder='Qty'
							value={item.quantity}
							onChange={(e) => handleValueChange(e, index)}
							required
						/>
						<input
							type='number'
							name='price'
							placeholder='Price'
							value={item.price}
							onChange={(e) => handleValueChange(e, index)}
							required
						/>
						{formData.items?.length > 1 && (
							<button
								type='button'
								onClick={() => handleRemoveItem(index)}>
								❌ Remove
							</button>
						)}
					</div>
				))}
				<button type='button' onClick={handleAddItem}>
					➕ Add Item
				</button>

				<div className='invoice-total'>
					<h3>Total: ₹ {getTotal()}</h3>
				</div>
			</div>
		</div>
	)
}

export default Itemdetails
