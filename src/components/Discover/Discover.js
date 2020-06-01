import React from 'react'
import DiscoverCardList from './DiscoverCardList/DiscoverCardList'
import "./DiscoverStyle.css"

export const Discover = (props) => (
  <div>
    <h4 className = "discover-container"> DISCOVER MORE...</h4>
    <DiscoverCardList generalContent = {props.generalContent.slice(12,16)}/>
  </div>
)