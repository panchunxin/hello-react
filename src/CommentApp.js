import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import { classDeclaration, validate } from '@babel/types'

class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
<<<<<<< HEAD
      content: [],
=======
      content: []
>>>>>>> bd3a2f2... react-test
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
<<<<<<< HEAD
  change (value) {
    console.log(value)
    this.setState({value})
    console.log(this.state)
  }
  render () {
    return (
      <div className='wrapper'>
        {this.state.red && this.state.red == 1 ? (
          <div>red == 1</div>
        ) : null}
        <CommentInput onSubmit={this.handleCommitContent.bind(this)}  child={this.parent}  childChangeFather={this.change.bind(this)}/>
        <CommentList content={this.state.content} />
=======
  render () {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleCommitContent.bind(this)}  child={this.parent}/>
        <CommentList content={this.state.content}/>
>>>>>>> bd3a2f2... react-test
      </div>
    )
  }
}

export default CommentApp
