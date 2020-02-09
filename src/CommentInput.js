import React, { Component } from "react";

class CommentInput extends Component {
  constructor () {
    super ()
    this.state = {
      userName: '',
      content: ''
    }
  }
  handleUserNameChange (event) {
    this.setState({
      userName: event.target.value
    })
  }
  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit () {
    console.log(this.props)
    if (this.props.onSubmit) {
      const {userName,content} = this.state
      this.props.onSubmit((userName,content))
    }
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <div className="comment-input">
          <div className="comment-field">
            <span className="comment-field-name">用户名：</span>
            <div className="comment-field-input">
              <input onChange={this.handleUserNameChange.bind(this)} value={this.state.userName}/>
            </div>
          </div>
          <div className="comment-field">
            <span className="comment-field-name">评论内容：</span>
            <div className="comment-field-input">
              <textarea onChange={this.handleContentChange.bind(this)} value = {this.state.content}/>
            </div>
          </div>
          <div className="comment-field-button">
            <button onClick={this.handleSubmit}>发布</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentInput;
