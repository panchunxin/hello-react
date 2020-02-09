import React, {
  Component
} from 'react'
import ReactDom from 'react-dom'

class Header1 extends Component {
  render() {
    const className = className
    const goodWord = <strong>is good</strong>
    const badWord = <strong>is not good</strong>
    const isGood = true
    return (
      <div class={className}>
        <h2>React 小书{isGood ? goodWord : badWord}</h2>
      </div>
    )
  }
}

ReactDom.render(
  <Header1 / > ,
  document.getElementById('root')
)