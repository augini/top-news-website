import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="cloudy-knoxville-gradient" className="font-small pt-4 mt-4 text-dark">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">T.O.P </h5>
            <p>This website is created to display top news from three regions instantly</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Top sources</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.bbc.com/">BBC News</a>
              </li>
              <li className="list-unstyled">
                <a href="https://en.yna.co.kr/">Yonhap News</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: 
          <a href="https://www.atabekov.com" alt ='Farrukh website'> 
          <span role = 'img' aria-label = 'hears'>🖤</span> 
          Atabekov Farrukh </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;