import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {defaultCapitalId: countryAndCapitalsList[0].id}

  updateCapital = event => {
    this.setState({defaultCapitalId: event.target.value})
  }

  getCountryName = () => {
    const {defaultCapitalId} = this.state
    const countryNameIs = countryAndCapitalsList.filter(
      eachCountryObj => eachCountryObj.id === defaultCapitalId,
    )
    return countryNameIs
  }

  render() {
    const countryName = this.getCountryName()
    //  console.log(countryName[0].country)
    return (
      <div className="bg-container">
        <div className="country-capital-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            id="capitals"
            onChange={this.updateCapital}
            className="option-design"
          >
            <option value="NEW_DELHI" defaultValue>
              New Delhi
            </option>
            <option value="KATHMANDU">Kathmandu</option>
            <option value="LONDON">London</option>
            <option value="PARIS">Paris</option>
            <option value="HELSINKI">Helsinki</option>
          </select>
          <label htmlFor="country" className="question">
            is capital of which country?
          </label>
          <p className="country">{countryName[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
