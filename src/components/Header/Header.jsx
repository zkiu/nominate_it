import React, {useState} from 'react'

export default function Header() {
	console.log(process.env.REACT_APP_OMDB_KEY)
	return (
		<header>
			<div className="container">
				<div className="logoContainer">
					{/* <Link to="/" className="logo hover"> */}
					🎥 Nomitate It!
					{/* </Link> */}
				</div>
			</div>
		</header>
	)
}
