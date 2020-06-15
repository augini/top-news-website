import React from "react";
import './HeaderNewsStyle.css'

const HeaderNews = (props) => {
  return (
      <a href={props.article.url} alt='news ticker'>
        {props.article.title + Array(10).fill('\xa0').join('') + '|'}  
      </a>
  )

};

export default HeaderNews;