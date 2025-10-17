import React, { useContext, useState } from "react"
import "./CSS/ShopCategory.css"
import { ShopContext } from "../Context/ShopContext"
import Item from "../Components/Item/Item"
// import dropdown_icon from "../Components/Assets/dropdown_icon.png"

const ShopCategory = (props) => {
	const { all_product, address } = useContext(ShopContext)
	const [sortOption, setsortOption] = useState("default")
	const [searchText, setSearchText] = useState("")

	// let filteredproducts = all_product.filter(
	// 	(item) => item.category === props.category
	// )

	let filteredproducts = all_product.filter((item) =>
		item.name.toLowerCase().includes(searchText.toLowerCase())
	)

	if (props.category) {
		filteredproducts = filteredproducts.filter(
			(item) => item.category === props.category
		)
	}

	if (sortOption === "lowToHigh") {
		filteredproducts = [...filteredproducts].sort(
			(a, b) => a.new_price - b.new_price
		)
	} else if (sortOption === "highToLow") {
		filteredproducts = [...filteredproducts].sort(
			(a, b) => b.new_price - a.new_price
		)
	} else if (sortOption === "aToZ") {
		filteredproducts = [...filteredproducts].sort((a, b) =>
			a.name.localeCompare(b.name)
		)
	} else if (sortOption === "zToA") {
		filteredproducts = [...filteredproducts].sort((a, b) =>
			b.name.localeCompare(a.name)
		)
	}

	return (
		<div className='shop-category'>
			<img className='shopcategory-banner' src={props.banner} alt='' />

			{/* Search bar */}
			<div className='shopcategory-search'>
				<input
					type='text'
					placeholder='Search products...'
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</div>

			<div className='shopcategory-indexSort'>
				<p>
					<span>Showing {filteredproducts.length}</span> products
				</p>
				<div className='shopcategory-sort'>
					<select
						onChange={(e) => setsortOption(e.target.value)}
						value={sortOption}>
						<option value='default'>Sort by</option>
						<option value='lowToHigh'>Price: Low To High</option>
						<option value='highToLow'>Price: High To Low</option>
						<option value='aToZ'>Name: A-Z</option>
						<option value='zToA'>Name: Z-A</option>
					</select>
					{/* <img src={dropdown_icon} alt='' /> */}
				</div>
			</div>
			<div className='shopcategory-products'>
				{filteredproducts.map((item, id) => (
					<Item
						key={id}
						id={item.id}
						name={item.name}
						image={item.image}
						new_price={item.new_price}
						old_price={item.old_price}
					/>
				))}
			</div>
			<div className='shopcategory-loadmore'>Explore more</div>
		</div>
	)
}

export default ShopCategory
