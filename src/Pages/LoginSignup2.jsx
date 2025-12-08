import React, { useState } from "react"

const LoginSignup2 = () => {
	const [isSignup, setIsSignup] = useState(false) // toggle between login & signup
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	})
	const [error, setError] = useState("")

	// handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	// handle form submission
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
		}
	}

	return (
		<div style={styles.container}>
			<h2>{isSignup ? "Sign Up" : "Login"} Page</h2>

			<form onSubmit={handleSubmit} style={styles.form}>
				{/* Only show name field in signup */}
				{isSignup && (
					<div style={styles.inputGroup}>
						<label htmlFor='name'>Full Name</label>
						<input
							type='text'
							name='name'
							placeholder='Enter your name'
							value={formData.name}
							onChange={handleChange}
						/>
					</div>
				)}

				<div style={styles.inputGroup}>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						placeholder='Enter your email'
						value={formData.email}
						onChange={handleChange}
					/>
				</div>

				<div style={styles.inputGroup}>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						placeholder='Enter your password'
						value={formData.password}
						onChange={handleChange}
					/>
				</div>

				{error && <p style={styles.error}>{error}</p>}

				<div style={styles.buttonGroup}>
					<button type='submit' style={styles.button}>
						{isSignup ? "Sign Up" : "Login"}
					</button>

					<button
						type='button'
						style={styles.toggleButton}
						onClick={() => setIsSignup((prev) => !prev)}>
						{isSignup
							? "Already have an account? Login"
							: "Don't have an account? Sign Up"}
					</button>
				</div>
			</form>
		</div>
	)
}

// Inline CSS styles
const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginTop: "50px",
		padding: "20px",
		border: "1px solid #ccc",
		borderRadius: "10px",
		width: "300px",
		margin: "50px auto",
		boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		gap: "15px",
		width: "100%",
	},
	inputGroup: {
		display: "flex",
		flexDirection: "column",
	},
	buttonGroup: {
		display: "flex",
		flexDirection: "column",
		gap: "10px",
	},
	button: {
		padding: "10px",
		backgroundColor: "#007bff",
		color: "#fff",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
		fontSize: "16px",
	},
	toggleButton: {
		padding: "8px",
		backgroundColor: "#6c757d",
		color: "#fff",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
		fontSize: "14px",
	},
	error: {
		color: "red",
		fontSize: "14px",
		textAlign: "center",
	},
}

export default LoginSignup2
