import React from 'react'
import TabCard from '../TabCard/TabCard'
import './TabList.css'

export const TabList = (props) => (
  <div className="tablist-container ml-5">
  {props.generalContent.map((content, index) => (
    <TabCard key = {index} content = {content} />
  ))}
  </div>
)