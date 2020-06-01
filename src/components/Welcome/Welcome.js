import React, { Component } from 'react'


class Welcome extends Component {

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>{this.props.data}</p>
      </div>
    )
  }

}


export default Welcome