import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./CSS/LoginSignup2.css"

const LoginSignup2 = () => {
	const navigate = useNavigate()
	const [isSignup, setIsSignup] = useState(false)
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	})
	const [error, setError] = useState("")

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (!formData.email || !formData.password) {
			setError("Please fill out all fields")
			return
		}
		if (isSignup && !formData.name) {
			setError("Please enter your name")
			return
		}

		setError("")

		if (isSignup) {
			alert(`🆕 Signed up as ${formData.name} (${formData.email})`)
		} else {
			alert(`🔑 Logged in as ${formData.email}`)
			navigate("/")
		}
	}

	return (
		<div className='container'>
			<h2>{isSignup ? "Sign Up" : "Login"} Page</h2>

			<form onSubmit={handleSubmit}>
				{isSignup && (
					<div className='input-group'>
						<label>Full Name</label>
						<input
							type='text'
							name='name'
							placeholder='Enter your name'
							value={formData.name}
							onChange={handleChange}
						/>
					</div>
				)}

				<div className='input-group'>
					<label>Email</label>
					<input
						type='email'
						name='email'
						placeholder='Enter your email'
						value={formData.email}
						onChange={handleChange}
					/>
				</div>

				<div className='input-group'>
					<label>Password</label>
					<input
						type='password'
						name='password'
						placeholder='Enter your password'
						value={formData.password}
						onChange={handleChange}
					/>
				</div>

				{error && <p className='error'>{error}</p>}

				<button type='submit' className='btn-main'>
					{isSignup ? "Sign Up" : "Login"}
				</button>

				<button
					type='button'
					className='btn-toggle'
					onClick={() => setIsSignup(!isSignup)}>
					{isSignup
						? "Already have an account? Login"
						: "Don't have an account? Sign Up"}
				</button>
			</form>
		</div>
	)
}

export default LoginSignup2
