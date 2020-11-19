import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  handleFindPetsClick = () => {
    // FETCH HERE
    const url = this.state.filters.type === 'all' ? '' : ('?type=' + this.state.filters.type)
    // console.log(this.state.filters.type)

    fetch('/api/pets' + url)
    .then(resp => resp.json())
    .then(data => this.setState({
      pets: data
    }))
  }

  handleAdoptPet = (petId) => {
    //find matching pet in state.pets
    // set the isAdopted property to true
    
    const newArray = this.state.pets.map((pet) => {
      if (pet.id === petId){
          pet.isAdopted = true
      } else {return pet}
    })


    this.setState({
      newArray
    })

  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
