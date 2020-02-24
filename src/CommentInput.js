import React, { Component } from "react";

class CommentInput extends Component {
  constructor () {
    super ()
    this.state = {
      userName: '',
      content: ''
    }
  }
  componentWillMount () {
    this._loadUserName () 
  }
  handleUserNameChange (event) {
    this.setState ({
      userName: event.target.value
    })
  }
  handleContentChange (event) {
    this.setState ({
      content: event.target.value
    })
  }
  handleSubmit () {
    if (this.props.onSubmit) {
      const { content,userName } = this.state
      this.props.onSubmit({userName,content,createdTime: +new Date()})
      this.setState ({
        userName: '',
        content: ''
      })
    }
  }
  handleUsernameBlur (event) {
    this._saveUserName (event.target.value)
  }
  _saveUserName (value) {
    localStorage.setItem('userName',value)
    console.log(localStorage)
  }
  _loadUserName () {
    if (localStorage.getItem('userName')) {
      let userName = localStorage.getItem('userName')
      this.setState ({
        userName: userName
      })
    }
  }
  componentDidMount () {
    this.textarea.focus()
  }
  render() {
    return (
      <div>
        <div onClick={() => {this.props.child()}} ref='father'>触发父组件方法</div>
        <div onClick={() => {this.props.childChangeFather({red: 1})}}>子组件如何改变父组件的state</div>
        <div className="comment-input">
          <div className="comment-field">
            <span className="comment-field-name">用户名：</span>
            <div className="comment-field-input">
              <input onBlur={this.handleUsernameBlur.bind(this)} onChange={this.handleUserNameChange.bind(this)} value={this.state.userName} />
            </div>
          </div>
          <div className="comment-field">
            <span className="comment-field-name">评论内容：</span>
            <div className="comment-field-input">
              <textarea ref={(ref) => {this.textarea = ref}} onChange={this.handleContentChange.bind(this)} value = {this.state.content}/>
            </div>
          </div>
          <div className="comment-field-button">
            <button onClick={this.handleSubmit.bind(this)}>发布</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentInput;
