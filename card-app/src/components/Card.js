import React from 'react'
import './Card.css'
import { Card } from "react-bootstrap";

const ShowCards = (card, index) => {

  	const showImage = card.image;

  	return(
    
	    <div className="col-md-6 col-lg-4 col-xs-12 util-margin-bottom-10">
		    <a href="https://google.com" target="_blank" rel="noopener noreferrer" title="Open in new window">
			    <Card style={{height:"100%"}} key={index} >
					{showImage ? <Card.Img variant="top" src={card.image} alt="image" height="40%" /> : ""}
					<Card.Body>
					    <Card.Title>{card.title}</Card.Title>
					    <Card.Text>
					      {card.info}
					    </Card.Text>
					</Card.Body>
			    </Card>
		    </a>
	    </div>
    
    )
}

export default ShowCards