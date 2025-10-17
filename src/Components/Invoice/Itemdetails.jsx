import React from "react"
import { useFormContext } from "react-hook-form"

const Itemdetails = (props) => {
	const {
		register,
		formState: { errors },
	} = useFormContext()

	const getTotal = () => {
		return (
			formData?.items?.reduce((acc, curr) => {
				return acc + curr?.quantity * curr?.price
			}, 0) || 0
		)
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
							name={`product`}
							placeholder='Product Name'
							value={item?.product}
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
						{formData.items?.length > 1 ? (
							<button type='button' onClick={() => handleRemoveItem(index)}>
								❌ Remove
							</button>
						) : null}
					</div>
				))}
				<button type='button' onClick={() => handleAddItem()}>
					➕ Add Item
				</button>

				{/* Total */}
				<div className='invoice-total'>
					<h3>Total: ₹ {getTotal()}</h3>
				</div>
			</div>
		</div>
	)
}

export default Itemdetails
