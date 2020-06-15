import React from 'react'
import HeaderNews from './HeaderNews/HeaderNews'
import './HeaderNewsLineStyle.css'

const HeaderNewsLine = (props) => {
  return (
    <div className="tcontainer">
      <div className="ticker-wrap">
        
        <div className = 'ticker-side-note'>
          Breaking News
        </div>
        
        <div className="ticker-move">
            {props.generalContent.map((article, index) => (
              <div className="ticker-item" key={index}>
              <HeaderNews article={article}/>
              </div>
            ))}
        </div>

      </div>
    </div>
  )
}

export default HeaderNewsLine