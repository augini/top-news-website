import axios from 'axios'

const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=33c6c100c9154b9a819d0e552f749941`

export const FetchData = async (country, category) => {
  let changeableUrl = url

  if(country){
    let UrlStart = url.slice(0,45)
    changeableUrl = `${UrlStart}${country}&category=business&apiKey=33c6c100c9154b9a819d0e552f749941`
  }

  let changeableUrlStart = changeableUrl.slice(0,57)
  changeableUrl = `${changeableUrlStart}${category}&apiKey=33c6c100c9154b9a819d0e552f749941`

  try{ 
    const { data: {articles} } = await axios.get(changeableUrl)
    console.log(articles);
    return articles
  }
  catch(error){
    console.log(error)
  }
}

