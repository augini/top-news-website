import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import HeaderNewsLine from './components/HeaderNews/HeaderNewsLine'
import FooterPage from './components/Footer/FooterPage'
import TabPage from './components/Tab/TabPage'
import Welcome from './components/Welcome/Welcome'
import SpinnerPage from './components/Spinner/SpinnnerPage'
import { Discover } from './components/Discover/Discover'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import {USA, RUSSIA, KOREA, countriesList} from './consonants/CountryChangeConsonants'


class App extends Component {

  state = {
    collection: [],
    categories: ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'],
    countries: ['USA', 'RUSSIA', 'KOREA'],
    currentCountry: 'us',
    currentCategoryID: 0,
    isLoading: true
  }

  componentDidMount() {
    //Set the collection to american articles
    this.setState( {
        isLoading: false,
        collection: USA.data,
      })
  }

  //Set the current category id to the index of the new selected category
  changeCategory = (newCategory) => {
    this.setState((prevState, prevProps) => {
      return {
        currentCategoryID: prevState.categories.findIndex(category => category === newCategory),
      }
    })
  }

  changeCountry = async (country) => {
    console.log(country, "inside function");
    const data  = countriesList[1].includes(country) ? RUSSIA
                  :countriesList[2].includes(country) ? KOREA
                  :USA
    this.setState( {
        isLoading: false,
        collection: data.data,
        categories:data.categories,
        countries: data.countries
    })
  }


  render() {
    const data = this.state.collection[this.state.currentCategoryID]
    console.log(this.state.collection);
    return (
      this.state.isLoading ?
        <SpinnerPage /> :
        <BrowserRouter>
          <div className="App">
            <Navbar changeCountry={this.changeCountry} countries = {this.state.countries}/>
            <HeaderNewsLine generalContent={data} />
            <TabPage generalContent={data} changeCategory={this.changeCategory} categories = {this.state.categories} />
            <Discover generalContent={data} />
            <Route path='/hello' component={Welcome} />
            <FooterPage />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
