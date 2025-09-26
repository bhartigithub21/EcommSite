import React, { useState } from "react"
import "./CSS/Invoice.css"

const InvoiceForm = () => {
	const [customer, setCustomer] = useState({
		name: "",
		email: "",
		address: "",
	})

	const [items, setItems] = useState([{ product: "", quantity: 1, price: 0 }])

	const handleCustomerChange = (e) => {
		const { name, value } = e.target
		setCustomer((prev) => ({ ...prev, [name]: value }))
	}

	const handleItemChange = (index, e) => {
		const { name, value } = e.target
		const newItems = [...items]
		newItems[index][name] = value
		setItems(newItems)
	}

	const addItem = () => {
		setItems([...items, { product: "", quantity: 1, price: 0 }])
	}

	const removeItem = (index) => {
		const newItems = items.filter((_, i) => i !== index)
		setItems(newItems)
	}

	const getTotal = () => {
		return items.reduce((total, item) => total + item.quantity * item.price, 0)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		alert("Invoice Generated! (Check console for details)")
		console.log({ customer, items, total: getTotal() })
	}

	return (
		<div className='invoice-form'>
			<h2>Invoice Form</h2>
			<form onSubmit={handleSubmit}>
				{/* Customer Details */}
				<div className='customer-info'>
					<h3>Customer Information</h3>
					<input
						type='text'
						name='name'
						placeholder='Customer Name'
						value={customer.name}
						onChange={handleCustomerChange}
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Customer Email'
						value={customer.email}
						onChange={handleCustomerChange}
						required
					/>
					<textarea
						name='address'
						placeholder='Customer Address'
						value={customer.address}
						onChange={handleCustomerChange}
						required
					/>
				</div>

				{/* Items */}
				<div className='invoice-items'>
					<h3>Invoice Items</h3>
					{items.map((item, index) => (
						<div key={index} className='invoice-item'>
							<input
								type='text'
								name='product'
								placeholder='Product Name'
								value={item.product}
								onChange={(e) => handleItemChange(index, e)}
								required
							/>
							<input
								type='number'
								name='quantity'
								min='1'
								placeholder='Qty'
								value={item.quantity}
								onChange={(e) =>
									handleItemChange(index, {
										target: {
											name: "quantity",
											value: parseInt(e.target.value),
										},
									})
								}
								required
							/>
							<input
								type='number'
								name='price'
								min='0'
								step='0.01'
								placeholder='Price'
								value={item.price}
								onChange={(e) =>
									handleItemChange(index, {
										target: {
											name: "price",
											value: parseFloat(e.target.value),
										},
									})
								}
								required
							/>
							<button type='button' onClick={() => removeItem(index)}>
								❌ Remove
							</button>
						</div>
					))}
					<button type='button' onClick={addItem}>
						➕ Add Item
					</button>
				</div>

				{/* Total */}
				<div className='invoice-total'>
					<h3>Total: ${getTotal().toFixed(2)}</h3>
				</div>

				<button type='submit' className='generate-btn'>
					Generate Invoice
				</button>
			</form>
		</div>
	)
}

export default InvoiceForm
