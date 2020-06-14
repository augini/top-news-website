import React from 'react';
import moment from 'moment';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardFooter} from 'mdbreact';
import './TabCard.css'

const TabCard = (props) => {
  const cleverTime = moment().startOf(new Date(props.content.publishedAt).getHours).fromNow(); 
  return (
    <a href={props.content.url}>
      <MDBCard className="tab-card-container w-100 mb-4" style={{ maxWidth: "22rem", color: 'black' }} >
      <MDBCardImage className="img-fluid" src={props.content.urlToImage} waves />
        <MDBCardBody>
          {/* <MDBCardTitle>{props.content.title}</MDBCardTitle> */}
          <MDBCardText>{props.content.description}</MDBCardText>
        </MDBCardBody>
        <MDBCardFooter className = 'd-flex justify-content-between'>
        <p className ="font-weight-bold">{props.content.source.name}</p>
        <p>{cleverTime}</p>
        </MDBCardFooter>
      </MDBCard>
    </a>
  )
}

export default TabCard;