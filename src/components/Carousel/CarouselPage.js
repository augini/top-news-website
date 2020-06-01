import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from "mdbreact";
import './CarouselPage.css'

const CarouselPage = (props) => {
  return (
    <div className = "w-100">
      <MDBCarousel
      activeItem={1}
      length={props.generalContent.length-1}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>

      {props.generalContent.map((article, index) => (
       
        <MDBCarouselItem key = {index} itemId= {index.toString()}>  
          <MDBView>
            <img
              className="d-block w-100"
              src={article.urlToImage?article.urlToImage:'https://i.pinimg.com/originals/bf/97/f7/bf97f7fb893ea02038a28bf6415fed02.jpg'}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption className = "articleURL">
           <a href={article.url} className = "text-white"> <h3 className="h3-responsive">{article.title}</h3></a>
            <p>{article.description}</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

      ) )}
        
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  );
}

export default CarouselPage;