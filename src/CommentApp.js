import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import { classDeclaration, validate } from '@babel/types'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      content: []
    }
  }
  componentWillMount () {
    this._loadContent()
  }
  handleCommitContent (content) {
    console.log(content)
    this.state.content.push (content)
    this.setState({
      content: this.state.content
    })
    this._saveContent ()
  } 
  _saveContent () {
    localStorage.setItem('content',JSON.stringify(this.state.content))
  }
  _loadContent () {
    let content = localStorage.getItem('content')
    if (content) {
      content = JSON.parse(content)
      this.setState({content})
    }
  }
  parent () {
    console.log('触发父组件方法成功')
  }
  render () {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleCommitContent.bind(this)}  child={this.parent}/>
        <CommentList content={this.state.content}/>
      </div>
    )
  }
}

export default CommentApp
