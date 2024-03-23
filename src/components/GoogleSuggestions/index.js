import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSuggestionItem = item => {
    this.setState({searchInput: item})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          className="logo"
          alt="google logo"
        />
        <div className="search-container">
          <div className="search-sub-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="Search Google"
              className="search-input"
            />
          </div>
          <ul className="list-container">
            {searchResult.map(each => (
              <SuggestionItem
                suggestionDetails={each}
                key={each.id}
                onSuggestionItem={this.onSuggestionItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
