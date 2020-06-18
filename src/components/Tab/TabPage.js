import React, { Component } from "react";
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import CarouselPage from '../Carousel/CarouselPage'
import { TabList } from './TabList/TabList'
import {Covid} from '../Covid19/CovidPage'

class TabPage extends Component {
  state = {
    activeItem: "1",
    tabs: [
      { id: '1', role: 'tab', link: '/' },
      { id: '2', role: 'tab', link: '/' },
      { id: '3', role: 'tab', link: '/' },
      { id: '4', role: 'tab', link: '/' },
      { id: '5', role: 'tab', link: '/' },
      { id: '6', role: 'tab', link: '/' },
      { id: '7', role: 'tab', link: '/' },
      { id: '8', role: 'tab', link: '/' },
    ],
  };

  toggle = (tab, category) => e => {
    this.props.changeCategory(category);

    if (this.state.activeItem !== tab) {
      setTimeout(() => {
        this.setState({
          activeItem: tab
        })
      }, 100)
    }
  };


  render() {

    const { categories, generalContent, handleChange, data, country } = this.props
  
    return (
      <div className="w-100 pl-2 pr-2">

        <MDBNav className="nav-tabs">
          {this.state.tabs.map((tab, index) => (
            <MDBNavItem key={index}>
              <MDBNavLink className='text-dark'
                link to={tab.link}
                active={this.state.activeItem === tab.id}
                onClick={this.toggle(tab.id, categories[index])}
                role={tab.role}>
                {categories[index]}
              </MDBNavLink>
            </MDBNavItem>
          ))}
        </MDBNav>

        <MDBTabContent activeItem={this.state.activeItem} >
          {this.state.tabs.map((tab, index) => {
            if(index !== 7) {
              return (
              <MDBTabPane key={index} tabId={tab.id} role="tabpanel">
                
                <div className="mt-1 d-flex p-3">
                  <CarouselPage generalContent={generalContent.slice(0, 7)} />
                  <TabList generalContent={generalContent.slice(7, 11)} />
                </div>
                
              </MDBTabPane>
            )} else {
              return (
              <Covid handleChange = {handleChange} data = {data} country = {country} />
            )}


          })}

        </MDBTabContent>

      </div>
    );
  }
}
export default TabPage;