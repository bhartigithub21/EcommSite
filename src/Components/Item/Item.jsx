import React from "react"
import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, image, new_price, old_price }) => {
	return (
		<div className='item'>
			<Link to={`/product/${id}`}>
				<img
					onClick={window.scrollTo(0, 0)}
					src={image}
					alt={name}
					className='item-img'
				/>
			</Link>
			<h3 className='item-name'>{name}</h3>
			<div className='item-prices'>
				<span className='new-price'>${new_price}</span>
				<span className='old-price'>${old_price}</span>
			</div>
		</div>
	)
}

export default Item
