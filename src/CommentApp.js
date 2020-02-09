import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  handleCommitContent (content) {
    console.log(content)
  } 
  render () {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleCommitContent.bind(this)}/>
        <CommentList/>
      </div>
    )
  }
}

export default CommentApp