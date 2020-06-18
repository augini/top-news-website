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

import American_Collection from './api/articles/USA_articles.json'
import { FetchData} from './api'

class App extends Component {
 
  state = {
      collection: [],
      // categories: ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'],
      categories: ['general', 'business'],
      countries: ['us', 'kr', 'ru'],
      currentCountry: 'us',
      currentCategoryID: 0,
      isLoading: true
    }

  componentDidMount() {
  // Pull data from API for each category
  this.state.categories.forEach(async (category) =>{

      const response = await FetchData(this.state.currentCountry, category)
        this.setState((prevState) => {
          return {
            isLoading: false,
            collection: [...prevState.collection, response],
       }})
       
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

 changeCountry  = async (country) => {
    const response =  await FetchData(country, 'business')
    this.setState((prevState) => {
    return {
      isLoading: false,
      collection: [response]
 }})}


  render() {
    const data = this.state.collection[this.state.currentCategoryID]
    console.log(this.state.collection, "this.state.collection");
    console.log(American_Collection, "American Collection");
    return (
      this.state.isLoading ? 
      <SpinnerPage /> :
      <BrowserRouter>
        <div className="App">
          <Navbar changeCountry = {this.changeCountry} />
          <HeaderNewsLine generalContent= {data} />
          <TabPage generalContent = {data} changeCategory={this.changeCategory} />
          <Discover generalContent = {data} />
          <Route path='/hello' component={ Welcome } />
          <FooterPage />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
