import React, { useState } from "react"
import "./CSS/LoginSignup.css"
import { useNavigate } from "react-router-dom"

const LoginSignup = () => {
	const navigate = useNavigate()
	const [isLogin, setIsLogin] = useState(false) // toggle between login/signup
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		agree: false,
	})

	// handle input change
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target
		setFormData({ ...formData, [name]: type === "checkbox" ? checked : value })
	}

	// handle form submit
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(formData)

		// basic validation
		if (!formData.email || !formData.password) {
			alert("Please fill all required fields")
			return
		}

		if (!isLogin && !formData.name) {
			alert("Please enter your name to signup")
			return
		}

		if (!isLogin && !formData.agree) {
			alert("Please agree to terms and policy")
			return
		}
		// if (
		// 	formData.email === "lovely.bharti21@gmail.com" &&
		// 	formData.password === "abc"
		// ) {
		// 	navigate("/")
		// }
		// if (formData.email || formData.password) {
		// 	navigate("/")
		// }

		const handleLogin = () => {
			if (formData.email === "email" && formData.password === "password") {
				navigate("/")
			} else {
				alert("login unsuccessful")
			}
		}

		setFormData({
			name: "",
			email: "",
			password: "",
			agree: false,
		})
	}

	return (
		<div className='loginsignup'>
			<div className='loginsignup-container'>
				<h1>{isLogin ? "Login" : "Sign Up"}</h1>
				<form onSubmit={handleSubmit}>
					<div className='loginsignup-fields'>
						{!isLogin && (
							<input
								type='text'
								name='name'
								placeholder='Enter your Name'
								value={formData.name}
								onChange={handleChange}
							/>
						)}
						<input
							type='email'
							name='email'
							placeholder='Email address'
							value={formData.email}
							onChange={handleChange}
						/>
						<input
							type='password'
							name='password'
							placeholder='Password'
							value={formData.password}
							onChange={handleChange}
						/>
					</div>

					{!isLogin && (
						<div className='loginsignup-agree'>
							<input
								type='checkbox'
								name='agree'
								checked={formData.agree}
								onChange={handleChange}
							/>
							<p>By continuing, I agree to the terms and policy.</p>
						</div>
					)}

					<button type='submit'>{isLogin ? "Login" : "Continue"}</button>
				</form>

				<p className='loginsignup-login'>
					{isLogin ? (
						<>
							Don’t have an account?{" "}
							<span onClick={() => setIsLogin(false)}>Sign up</span>
						</>
					) : (
						<>
							Already have an account?{" "}
							<span onClick={() => setIsLogin(true)}>Login here</span>
						</>
					)}
				</p>
			</div>
		</div>
	)
}

export default LoginSignup
