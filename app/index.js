import React from 'react'
import ReactDom from 'react-dom'
import './index.css' // syntax works because of the style-loader for the webpack rules
import Popular from './components/Popular'


class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)
