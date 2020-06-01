import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCol } from "mdbreact";
import './DiscoverCard.css'

export const DiscoverCard = (props) => (
  <MDBCol sm="3">
    <a href= {props.content.url}>
      <MDBCard className="discover-card-container" style = {{color:'black'}}>
        <MDBCardImage className="img-fluid" src={props.content.urlToImage}
          waves />
        <MDBCardBody>
          <MDBCardTitle>{props.content.title}</MDBCardTitle>
          <MDBCardText>{props.content.description}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </a>
  </MDBCol>
)