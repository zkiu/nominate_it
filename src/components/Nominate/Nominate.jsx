import React, {useState} from 'react'

export default function Nominate() {
	const list = []
	return (
		<section>
			<h2>Your Nomination List:</h2>
			<ul className="nominationContainer">{list}</ul>
		</section>
	)
}
