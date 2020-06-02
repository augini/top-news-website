import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdbreact';
import './TabCard.css'

const TabCard = (props) => {
  return (
    <a href={props.content.url}>
      <MDBCard className="tab-card-container w-100 mb-1" style={{ maxWidth: "22rem", color: 'black' }} >
      {/* <MDBCardImage className="img-fluid" src={props.content.urlToImage} waves /> */}
        <MDBCardBody>
          <MDBCardTitle>{props.content.title}</MDBCardTitle>
          <MDBCardText>{props.content.description}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </a>
  )
}

export default TabCard;