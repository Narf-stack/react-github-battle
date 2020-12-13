import React from "react"
import PropTypes from 'prop-types'
import {fetchPopularRepos} from '../utils/api'

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
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage : 'All',
      repos: {},
      error:null
    }
    this.updatedLanguage = this.updatedLanguage.bind(this)
    this.isLoading = this.isLoading.bind(this)
  }
  componentDidMount(){
    this.updatedLanguage(this.state.selectedLanguage)
  }
  updatedLanguage(selectedLanguage){
    this.setState({
      selectedLanguage: selectedLanguage,
      error:null
    })


    if (!this.state.repos[selectedLanguage]){
      // Will cache repos to limit fetch to the API
      fetchPopularRepos(selectedLanguage)
        .then((data)=>{
          this.setState(({repos}) => ({
            repos:{
                ...repos,
                [selectedLanguage]: data
            }

          }))
        })
        .catch((error)=>{
          console.warn('Error fetching repos: ',error)

          this.setState({
            error:'There was an error fetching the repositories.'
          })
        })



      // Before caching repos
      // fetchPopularRepos(selectedLanguage)
      //   .then((repos)=> this.setState({
      //     repos,
      //     error:null
      //   }))
      //   .catch((error)=>{
      //     console.warn('Error fetching repos: ',error)

      //     this.setState({
      //       error:'There was an error fetching the repositories.'
      //     })
      //   })
    }


  }
  isLoading(){
    const {selectedLanguage, repos, error} = this.state

    return !repos[selectedLanguage] && this.state.error === null

    // Before caching repos
    // return this.state.repos === null && this.state.error === null
  }
  render() {
    const {selectedLanguage, repos, error} = this.state
    // console.log(selectedLanguage)
    return(
      <React.Fragment>
        <LanguagesNav
        selected={selectedLanguage}
        onUpdateLanguage={this.updatedLanguage}
        />
        {this.isLoading() && <p>Loading ...</p>}
        {error && <p>{error}</p>}
        {repos[selectedLanguage] && <pre>{JSON.stringify(repos[selectedLanguage],null,2)}</pre>}
      </React.Fragment>


    )
  }
}
