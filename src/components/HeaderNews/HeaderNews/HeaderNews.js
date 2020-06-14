import React from "react";
import './HeaderNewsStyle.css'

const HeaderNews = (props) => {
  console.log(props, "new");
  return (
    <div>  
      <a href={props.article.url} alt= 'news ticker'>
        {props.article.title} 
      </a>  
    </div>
  )

};

export default HeaderNews;