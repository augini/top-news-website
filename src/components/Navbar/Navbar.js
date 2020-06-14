import React, { Component } from "react";
import { MDBNavbar,MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,  MDBIcon, MDBNavbarBrand } from "mdbreact";
import './NavbarStyle.css'

class NavbarPage extends Component {
  state = {
    regions: [
      { country: 'U.S.A', shortName: 'us', id: '1', link: '/',  },
      { country: 'RUSSIA', shortName: 'ru', id: '2', link: '/' },
      { country: 'KOREA', shortName: 'kr',  id: '3', link: '/'  },
    ],
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const {changeCountry} = this.props 
    return (

      <MDBNavbar color="cloudy-knoxville-gradient" light expand="lg">

        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
        <MDBNavbarBrand href="#" className = 'logoContainer'>
          <span className = "logo"> TopNews </span>
        </MDBNavbarBrand>

         {/* Replace the content with the data from the array */}
          <MDBNavbarNav left className="font-weight-bold">
           
           {this.state.regions.map((region, index) => (
            
            <MDBNavItem key = {index}  >
              <MDBNavLink to= {region.link} onClick = {()=>{changeCountry(region.shortName)}} >{region.country}</MDBNavLink>
            </MDBNavItem>
           
           ))}

          </MDBNavbarNav>
          
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/">
                <MDBIcon icon="envelope" className="mr-1" />Contact</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/">
                <MDBIcon icon="cog" className="mr-1" />Settings</MDBNavLink>
            </MDBNavItem>
            
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/">
                <i className="fas fa-laptop-code mr-1"></i>Atabekov Farrukh
              </MDBNavLink>
            </MDBNavItem>

          </MDBNavbarNav>

        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
