import React, { useContext, useState } from "react"
import "./CSS/ShopCategory.css"
import { ShopContext } from "../Context/ShopContext"
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Item/Item"

const ShopCategory = (props) => {
	const { all_product } = useContext(ShopContext)
	const [sortOption, setSortOption] = useState("default")
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 5

	// Filter products by category
	let filteredProducts = all_product.filter(
		(item) => item.category === props.category
	)

	// Sort products
	if (sortOption === "lowToHigh") {
		filteredProducts = [...filteredProducts].sort(
			(a, b) => a.new_price - b.new_price
		)
	} else if (sortOption === "highToLow") {
		filteredProducts = [...filteredProducts].sort(
			(a, b) => b.new_price - a.new_price
		)
	} else if (sortOption === "aToZ") {
		filteredProducts = [...filteredProducts].sort((a, b) =>
			a.name.localeCompare(b.name)
		)
	} else if (sortOption === "zToA") {
		filteredProducts = [...filteredProducts].sort((a, b) =>
			b.name.localeCompare(a.name)
		)
	}

	// Pagination logic
	const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
	const startIndex = (currentPage - 1) * itemsPerPage
	const currentProducts = filteredProducts.slice(
		startIndex,
		startIndex + itemsPerPage
	)

	return (
		<div className='shop-category'>
			<img className='shopcategory-banner' src={props.banner} alt='' />

			<div className='shopcategory-indexSort'>
				<p>
					<span>
						Showing {startIndex + 1}-
						{Math.min(startIndex + itemsPerPage, filteredProducts.length)}
					</span>{" "}
					of {filteredProducts.length} products
				</p>

				<div className='shopcategory-sort'>
					<select
						onChange={(e) => {
							setSortOption(e.target.value)
							setCurrentPage(1) // reset to first page after sort
						}}
						value={sortOption}>
						<option value='default'>Sort by</option>
						<option value='lowToHigh'>Price: Low to High</option>
						<option value='highToLow'>Price: High to Low</option>
						<option value='aToZ'>Name: A - Z</option>
						<option value='zToA'>Name: Z - A</option>
					</select>
					<img src={dropdown_icon} alt='' />
				</div>
			</div>

			<div className='shopcategory-products'>
				{currentProducts.map((item, i) => (
					<Item
						key={i}
						id={item.id}
						name={item.name}
						image={item.image}
						new_price={item.new_price}
						old_price={item.old_price}
					/>
				))}
			</div>

			{/* Pagination Buttons */}
			<div className='shopcategory-pagination'>
				<button
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}>
					Prev
				</button>

				{[...Array(totalPages)].map((_, i) => (
					<button
						key={i}
						className={currentPage === i + 1 ? "active" : ""}
						onClick={() => setCurrentPage(i + 1)}>
						{i + 1}
					</button>
				))}

				<button
					onClick={() =>
						setCurrentPage((prev) => Math.min(prev + 1, totalPages))
					}
					disabled={currentPage === totalPages}>
					Next
				</button>
			</div>
		</div>
	)
}

export default ShopCategory
