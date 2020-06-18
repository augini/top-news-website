import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,MDBNavbarBrand } from "mdbreact";
import './NavbarStyle.css'
import RUSSIA from './russia.svg'
import USA from './united-states-of-america.svg'
import KOREA from './south-korea.svg'

class NavbarPage extends Component {
  state = {
    regions: [
      { country: 'USA',  id: '1', link: '/'},
      { country: 'RUSSIA',  id: '2', link: '/' },
      { country: 'KOREA', id: '3', link: '/' },
    ],
    collapseID: "",
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const { changeCountry, countries } = this.props
    const flags = {
      'RUSSIA': RUSSIA,
      'Россия': RUSSIA,
      '러시아': RUSSIA,
      'USA': USA,
      '미국': USA,
      'США': USA,
      'KOREA': KOREA,
      '대한민국':KOREA,
      'Корея': KOREA
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

            {/* Flag Lit fsor regions */}
            {this.state.regions.map((region, index) => (

               <MDBNavItem key={index} className = 'navItemContainer'>
                  <MDBNavLink to={region.link} onClick={() => { changeCountry(countries[index]) }} >

                    <img src = {flags[countries[index]] } alt="React Logo" className = 'flagImage' />
                    { countries[index] }
                  
                  </MDBNavLink>
                </MDBNavItem> 

              ))}
              
            {/* <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="/">
                <MDBIcon icon="cog" className="mr-1" />Settings</MDBNavLink>
            </MDBNavItem> */}

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
