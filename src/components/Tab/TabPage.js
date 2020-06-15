import React, { Component } from "react";
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import CarouselPage from '../Carousel/CarouselPage'
import { TabList } from './TabList/TabList'


class TabPage extends Component {
  state = {
    activeItem: "1",
    tabs: [
      { tab: 'General', id: '1', role: 'tab', link: '/', content: this.props.generalContent },
      { tab: 'Business', id: '2', role: 'tab', link: '/', content: this.props.generalContent },
      { tab: 'Entertainment', id: '3', role: 'tab', link: '/', content: this.props.generalContent },
      { tab: 'Health', id: '4', role: 'tab', link: '/', content: this.props.generalContent },
      { tab: 'Science', id: '5', role: 'tab', link: '/', content: this.props.generalContent },
      { tab: 'Sports', id: '6', role: 'tab', link: '/', content: this.props.generalContent },
      { tab: 'Technology', id: '7', role: 'tab', link: '/', content: this.props.generalContent },
    ],
  };

  toggle = (tab, category) => e => {
    this.props.changeCategory(category);

    if (this.state.activeItem !== tab) {
      setTimeout(()=>{
        this.setState({
          activeItem: tab
        })
      }, 100)
    }
  };


  render() {
    // console.log(this.props.generalContent, "comingfrom TabPage");
    return (
      <div className="w-100 pl-2 pr-2">

        <MDBNav className="nav-tabs">
          {this.state.tabs.map((tab, index) => (
            <MDBNavItem key={index}>
              <MDBNavLink className ='text-dark'
              link to={tab.link} 
              active={this.state.activeItem === tab.id} 
              onClick={this.toggle(tab.id, tab.tab.toLowerCase()) } 
              role={tab.role}>
              {tab.tab}
              </MDBNavLink>
            </MDBNavItem>
          ))}
        </MDBNav>

        <MDBTabContent activeItem={this.state.activeItem} >
          {this.state.tabs.map((tab, index) => (

            <MDBTabPane key={index} tabId={tab.id} role="tabpanel">
              <div className="mt-1 d-flex p-3">
                <CarouselPage generalContent={this.props.generalContent.slice(0, 7)} />
                <TabList generalContent={this.props.generalContent.slice(7, 11)} />
              </div>
            </MDBTabPane>

          ))}
        </MDBTabContent>

      </div>
    );
  }
}
export default TabPage;