import React from "react"
import PropTypes from 'prop-types'


function LanguagesNav({selected, onUpdateLanguage}){
  const languages = ['All','Javascript','Ruby','Java','CSS','Python']
  // console.log(onUpdateLanguage)
  return (
    <ul className='flex-center'>
      {languages.map((language)=>(
        <li key={language}>
          <button
            className='btn-clear nav-link'
            style={language=== selected?{color:'gold'} : null}
            onClick={()=> onUpdateLanguage(language) }>
            {language}
          </button>
        </li>
          )
        )
      }
    </ul>
  )
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage : 'All'
    }
    this.updatedLanguage = this.updatedLanguage.bind(this)
  }
  updatedLanguage(selectedLanguage){
    this.setState({
      selectedLanguage: selectedLanguage
    })
  }
  render() {
    const {selectedLanguage} = this.state
    // console.log(selectedLanguage)
    return(
      <React.Fragment>
        <LanguagesNav
        selected={selectedLanguage}
        onUpdateLanguage={this.updatedLanguage}
        />
      </React.Fragment>


    )
  }
}
