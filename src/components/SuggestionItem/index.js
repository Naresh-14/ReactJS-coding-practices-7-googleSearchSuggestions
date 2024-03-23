import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onSuggestionItem} = props
  const {suggestion} = suggestionDetails
  const onSuggestion = () => {
    onSuggestionItem(suggestion)
  }

  return (
    <li className="list-item-container">
      <p className="list-item-name">{suggestion}</p>
      <button
        type="button"
        className="suggestion-button"
        onClick={onSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="list-arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
