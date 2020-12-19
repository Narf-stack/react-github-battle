import React from "react"
import PropTypes from 'prop-types'
import {fetchPopularRepos} from '../utils/api'
import {FaUser, FaStar, FaCodeBranch, FaExclamationTriangle} from 'react-icons/fa'
import Card from './Card'

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

function ReposGrid({repos}){
  return (
    <ul className='grid space-around'>
      {repos.map((repo, index)=>{
        const {name, owner, html_url, stargazers_count, forks, open_issues} = repo
        const {login, avatar_url } = owner

        return(
          <li key={html_url} className='repo bg-light'>
            <Card
              header = {`#${index + 1}`}
              avatar={avatar_url}
              href={html_url}
              name={login}
            >
              <ul className='card-list'>
                <li>
                  <FaUser color='rgb(255,191,116)' size={22}/>
                  <a href={`https://github.com/${login}`}>
                    {login}
                  </a>
                </li>
                <li>
                  <FaStar color='rgb(255,215,0)' size={22}/>
                  {stargazers_count.toLocaleString()} stars
                </li>
                <li>
                  <FaCodeBranch color='rgb(129,195,245)' size={22}/>
                  {forks.toLocaleString()} forks
                </li>
                <li>
                  <FaExclamationTriangle color='rgb(241,138,147)' size={22}/>
                  {open_issues.toLocaleString()} open
                </li>
              </ul>
            </Card>
          </li>
        )
      })}
    </ul>

  )
}

ReposGrid.propTypes = {
  repos: PropTypes.array.isRequired
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
        {error && <p className='center-text error'>{error}</p>}
        {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]}/>}
      </React.Fragment>


    )
  }
}
