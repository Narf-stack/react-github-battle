import React from "react"




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
    const languages = ['All','Javascript','Ruby','Java','CSS','Python']
    // console.log(this.state)
    return (
      <ul className='flex-center'>
        {languages.map((language)=>(
          <li key={language}>
            <button
              className='btn-clear nav-link'
              style={language===this.state.selectedLanguage?{color:'gold'} : null}
              onClick={()=> this.updatedLanguage(language) }>
              {language}
            </button>
          </li>
            )
          )
        }
      </ul>
    )
  }
}
