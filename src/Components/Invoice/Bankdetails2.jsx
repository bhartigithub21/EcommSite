import React, { useState } from "react"

const Bankdetails2 = () => {
	return (
		<div>
			<h2>Bank Details</h2>
			<input type='number' placeholder='bank account no.' name={"accountno"} />
			<input type='text' placeholder='bank name.' name={"bankname"} />
			<input type='number' placeholder='branch name' name={"branchname"} />
			<input
				type='number'
				placeholder='account holder'
				name={"accountholder"}
			/>
		</div>
	)
}

export default Bankdetails2
