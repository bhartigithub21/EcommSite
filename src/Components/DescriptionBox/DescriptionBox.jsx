import React from "react"
import "./DescriptionBox.css"

const DescriptionBox = () => {
	return (
		<div className='descriptionbox'>
			<div className='descriptionbox-navigator'>
				<div className='description-nav-box'>Description</div>
				<div className='description-nav-box fade'>Review (122)</div>
			</div>
			<div className='descriptionbox-description'>
				<p>
					An e-commerce website is an online platform that enables businesses to
					buy and sell products, services, or digital goods over the internet,
					acting as a virtual storefront. It allows customers to browse
					products, add them to a shopping cart, make payments online, and
					manage orders, providing a convenient and accessible way to shop from
					anywhere, at any time.
				</p>
				<p>
					An e-commerce website shows products or services, with details like
					descriptions, prices, and images, organized in a catalog. It features
					a shopping cart for selections, a secure checkout process for
					payments, and order tracking.
				</p>
			</div>
		</div>
	)
}

export default DescriptionBox
