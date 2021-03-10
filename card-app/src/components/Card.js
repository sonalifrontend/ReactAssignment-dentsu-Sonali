import React from 'react'
import './Card.css'

function Card({title, imageUrl, body}) {
	return (
			
		<>
			<div className="image-container util-margin-bottom-10"><img src={imageUrl} alt="img" className="" /></div>
			<div className="body-container">
			<h2 className="h3">{title}</h2>
				<p>{body}</p>
			</div>
									 
		</>
	)
}

export default Card