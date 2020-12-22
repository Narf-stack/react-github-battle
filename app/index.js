import React from 'react'
import ReactDom from 'react-dom'
import './index.css' // syntax works because of the style-loader for the webpack rules
import Popular from './components/Popular'
import Battle from './components/Battle'
import {ThemeProvider} from './contexts/theme'
import Nav from './components/Nav'
import Results from './components/Results'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({theme})=>{
          theme: theme === 'light' ? 'dark' : 'light'
        })
      }
    }

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className='container'>
              <Nav/>
              <Switch>
                <Route exact path='/' component={Popular} />
                <Route exact path='/battle' component={Battle} />
                <Route exact path='/battle/results' component={Results} />
                <Route render={()=><h1>404</h1>} />
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
)
