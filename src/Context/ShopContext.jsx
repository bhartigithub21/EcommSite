import React, { createContext, useState } from "react"
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
	let cart = {}
	for (let index = 0; index < all_product.length + 1; index++) {
		cart[index] = 0
	}
	return cart
}

const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart())
	const [address, setAddress] = useState(null)

	const addAddress = (value) => {
		setAddress(value)
	}

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
	}

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
	}

	const deleteFromCart = (itemId) => {
		// setCartItems((prev) => {
		// 	prev.filter((e) => e.id != itemId)
		// })
		setCartItems((prev) => {
			let updateditemobject = { ...prev }
			delete updateditemobject[itemId]
			return updateditemobject
		})
	}

	// const getTotalCartAmount = () => {
	// 	let totalAmount = 0
	// 	for (const item in cartItems) {
	// 		if (cartItems[item] > 0) {
	// 			let itemInfo = all_product.find(
	// 				(product) => product.id === Number(item)
	// 			)
	// 			totalAmount += itemInfo.new_price * cartItems[item]
	// 		}
	// 		return totalAmount
	// 	}
	// }

	const getTotalCartItems = () => {
		let totalItem = 0
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				totalItem += cartItems[item]
			}
		}
		return totalItem
	}
	const contextValue = {
		// getTotalCartAmount,
		getTotalCartItems,
		all_product,
		cartItems,
		addToCart,
		removeFromCart,
		deleteFromCart,
		addAddress,
		address,
	}

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	)
}
export default ShopContextProvider
