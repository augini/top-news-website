import React from 'react';
import { MDBRow } from "mdbreact";
import { DiscoverCard } from '../DiscoverCard/DiscoverCard'

const DiscoverCardList = (props) => {
  return (
    <div className="m-5">
      <MDBRow>
        {props.generalContent.map((content, index) => (
          <DiscoverCard key={index} content={content} />
        ))}
      </MDBRow>
    </div>
  );
};

export default DiscoverCardList;