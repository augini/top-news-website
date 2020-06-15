import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBNavbarBrand } from "mdbreact";
import './NavbarStyle.css'
import RUSSIA from './russia.svg'
import USA from './united-states-of-america.svg'
import KOREA from './south-korea.svg'

class NavbarPage extends Component {
  state = {
    regions: [
      { country: 'USA', shortName: 'us', id: '1', link: '/'},
      { country: 'RUSSIA', shortName: 'ru', id: '2', link: '/' },
      { country: 'KOREA', shortName: 'kr', id: '3', link: '/' },
    ],
    collapseID: "",
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const { changeCountry } = this.props
    const flags = {
      'RUSSIA': RUSSIA,
      'USA': USA,
      'KOREA': KOREA
    }
    return (

      <MDBNavbar color="cloudy-knoxville-gradient" light expand="lg">

        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />

        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarBrand href="#" className='logoContainer'>
            <span className="logo"> T.O.P </span>
          </MDBNavbarBrand>

          {/* Replace the content with the data from the array */}
          <MDBNavbarNav right>
            {/* Flag List for regions */}
            {this.state.regions.map((region, index) => (

               <MDBNavItem key={index} className = 'navItemContainer'>
                  <MDBNavLink to={region.link} onClick={() => { changeCountry(region.shortName) }} >
                    <img src = { flags[region.country] } alt="React Logo" className = 'flagImage' />
                    { region.country }
                  </MDBNavLink>
                </MDBNavItem> 

              ))}
              
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
