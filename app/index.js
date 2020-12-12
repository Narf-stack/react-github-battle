import React from 'react'
import ReactDom from 'react-dom'
import './index.css' // syntax works because of the style-loader for the webpack rules

class App extends React.Component {
  render() {
    return (
      <div>
        Helllo World!
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)
