import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom" // for internal navigation
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png"

const Footer = () => {
	return (
		<div className='footer'>
			{/* Logo */}
			<div className='footer-logo'>
				<img src={footer_logo} alt='logo' />
				<p>SHOPPER</p>
			</div>

			{/* Navigation Links */}
			<ul className='footer-links'>
				<li>
					<Link to='/company'>Company</Link>
				</li>
				<li>
					<Link to='/products'>Products</Link>
				</li>
				<li>
					<Link to='/offices'>Offices</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				<li>
					<Link to='/contact'>Contact</Link>
				</li>
			</ul>

			{/* Social Icons */}
			<div className='footer-social-icon'>
				<div className='footer-icons-container'>
					<a
						href='https://instagram.com/yourpage'
						target='_blank'
						rel='noopener noreferrer'>
						<img src={instagram_icon} alt='Instagram' />
					</a>
				</div>
				<div className='footer-icons-container'>
					<a
						href='https://pinterest.com/yourpage'
						target='_blank'
						rel='noopener noreferrer'>
						<img src={pintester_icon} alt='Pinterest' />
					</a>
				</div>
				<div className='footer-icons-container'>
					<a
						href='https://wa.me/1234567890'
						target='_blank'
						rel='noopener noreferrer'>
						<img src={whatsapp_icon} alt='WhatsApp' />
					</a>
				</div>
			</div>

			{/* Copyright */}
			<div className='footer-copyright'>
				<hr />
				<p>Copyright © 2025 - All Rights Reserved</p>
			</div>
		</div>
	)
}

export default Footer
