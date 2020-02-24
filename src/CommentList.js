import React, { Component } from 'react'
import { deflate } from 'zlib'

class ComponentList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const content = this.props.content
    return (
      <div>
        {content.map ((item,index) => {
          return (
            <div key={index}>{item.userName}: {item.content}</div>
          )
        }) }
      </div>
    )
  }
}

export default ComponentList