import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask,MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import './CarouselPage.css'

const CarouselPage = (props) => {
  const imageUrlForEmptyArticle = 'https://i.pinimg.com/originals/bf/97/f7/bf97f7fb893ea02038a28bf6415fed02.jpg'
  const SpecialArticle = props.specialArticle
  const SpecialArticle2 = props.generalContent[props.generalContent.length - 1]
  return (
    <div className="w-100">
      <MDBCarousel
        activeItem={1}
        length={props.generalContent.length - 1}
        showControls={true}
        showIndicators={true}
        className="z-depth-1 "
      >
        <MDBCarouselInner>
          {props.generalContent.map((article, index) => (
            <MDBCarouselItem key={index} itemId={index.toString()}>
              <MDBView>
                {/* <div style={{ backgroundImage: `url(${article.urlToImage?article.urlToImage: imageUrlForEmptyArticle})`}} className = "imageContainer"/> */}
                <img
                  className="d-block w-100"
                  src={article.urlToImage ? article.urlToImage : imageUrlForEmptyArticle}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption className="articleURL">
                <a href={article.url} className="text-white">
                  <h3 className="h3-responsive">{article.title}</h3>
                </a>
                <p>{article.description}</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>

          ))}

        </MDBCarouselInner>
      </MDBCarousel>

      <div className='mt-5'>
        <MDBCard style={{ width: "22rem" }} className="mt-3 mr-4 w-100" >

          <MDBCardBody className="d-flex flex-direction-column">
            <MDBCardImage className="img-fluid" src={SpecialArticle.urlToImage} waves />
            <div className='m-4'>
              <MDBCardTitle>{SpecialArticle.title}</MDBCardTitle>
              <MDBCardText>
                {SpecialArticle.content}
              </MDBCardText>
              <MDBCardText className='d-flex justify-content-end '>
              <a href={SpecialArticle.url}>Read more</a>
              </MDBCardText>
            </div>
          </MDBCardBody>

        </MDBCard>


        <MDBCard style={{ width: "22rem" }} className="mt-3 mr-4 w-100" >

          <MDBCardBody className="d-flex flex-direction-column">
            <MDBCardImage className="img-fluid" src={SpecialArticle2.urlToImage} waves />
            <div className='m-4'>
              <MDBCardTitle>{SpecialArticle2.title}</MDBCardTitle>
              <MDBCardText>
                {SpecialArticle2.content}
              </MDBCardText>
              <MDBCardText className='d-flex justify-content-end '>
              <a href= {SpecialArticle2.url}>Read more</a>
              </MDBCardText>
            </div>

          </MDBCardBody>

        </MDBCard>

      </div>


    </div>
  );
}

export default CarouselPage;