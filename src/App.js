import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import './App.css'

class App extends Component {
  state = {
    searchInput: '',
    userDetails: [],
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickButton = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const userItem = {
      id: uuidV4(),
      word: searchInput,
      lengthOfWord: searchInput.length,
    }
    this.setState(prevState => ({
      userDetails: [...prevState.userDetails, userItem],
      searchInput: '',
    }))
  }

  renderUserWordCount = () => {
    const {userDetails} = this.state
    const lengthOf = userDetails.length > 0

    return (
      <>
        {lengthOf ? (
          <ul className="ul-lists">
            {userDetails.map(eachItem => (
              <li key={eachItem.id} className="list-item">
                <p className="para-word">
                  {eachItem.word} : <span>{eachItem.lengthOfWord}</span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
            alt="no user inputs"
            className="no-user-img"
          />
        )}
      </>
    )
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="app-container">
        <div className="user-character-info-div">
          <div className="boss-heading-div">
            <h1 className="heading">Count the characters like a boss.. </h1>
          </div>
          <div className="user-words-info-div">
            {this.renderUserWordCount()}
          </div>
        </div>
        <div className="user-enter-div">
          <h1 className="char-heading">Character Counter</h1>
          <div className="input-container">
            <div className="input-div">
              <form onSubmit={this.onClickButton} className="form-div">
                <input
                  type="text"
                  className="input-element"
                  onChange={this.onChangeSearchInput}
                  value={searchInput}
                  placeholder="Enter the characters here"
                />
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
