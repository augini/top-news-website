import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import FooterPage from './components/Footer/FooterPage'
import TabPage from './components/Tab/TabPage'
import Welcome from './components/Welcome/Welcome'
import SpinnerPage from './components/Spinner/SpinnnerPage'
import { Discover } from './components/Discover/Discover'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      collection: [],
      // categories: ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'],
      categories: ['general', 'business'],
      countries: ['us', 'kr', 'ru'],
      currentCountry: 'ru',
      currentCategoryID: 0,
      currentCollection: [],
      isLoading: true
    }
  }

  componentDidMount() {
  //Pull the data from API for each category
  this.state.categories.forEach((category, index) => {
  var req = new Request(this.constructURL(this.state.currentCountry, category ));
  fetch(req)
    .then(res => res.json())
    .then(data => this.setState((prevState,prevProps)=>{
      const prevData = prevState.collection
      //When the index reaches the last category, release the spinner
      //and select data for the first category
      if(index === 1) return {
          isLoading: false,
          collection: [ ...prevData, data]}
      else return {
        collection: [ ...prevData, data],
      }
    }))
  })}

  //Function to construct URL
  constructURL = (country, category) => {
    const URL = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=33c6c100c9154b9a819d0e552f749941`
    return URL
  }

  //Function to change category when category is selected
  changeCategory = (newCategory) => {
    this.setState((prevState, prevProps) => {
      return {
        currentCategoryID: prevState.categories.findIndex(category => category === newCategory),
      }
    })
  }

  render() {
    // console.log(this.state.collection[0], "currentCollection is", this.state.currentCollection);
    
    return (
      this.state.isLoading ? 
      
      <SpinnerPage /> :
      
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <TabPage generalContent = {this.state.collection[this.state.currentCategoryID].articles} changeCategory={this.changeCategory} />
          <Discover generalContent={this.state.collection[this.state.currentCategoryID].articles} />
          <Route path='/hello' component={ Welcome } />
          <FooterPage />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
