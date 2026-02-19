import React, { useState } from "react"

const Bankdetails2 = () => {
	return (
		<div className="bank-details-container">
			<h2 className="bank-details-title">Bank Details</h2>
			<div className="bank-input-group">
				<input type='number' placeholder='bank account no.' name={"accountno"} className="bank-input" />
				<input type='text' placeholder='bank name.' name={"bankname"} className="bank-input" />
				<input type='number' placeholder='branch name' name={"branchname"} className="bank-input" />
				<input
					type='number'
					placeholder='account holder'
					name={"accountholder"}
					className="bank-input"
				/>
			</div>
		</div>
	)
}

export default Bankdetails2
