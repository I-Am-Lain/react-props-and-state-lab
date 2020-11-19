import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = (petArray) => {
    let myArray = petArray.map(p => {
      return <Pet key={p.uuid} pet={p} onAdoptPet={this.props.onAdoptPet}/>
    })

    return myArray
  }

  render() {
    return <div className="ui cards">
      {this.renderPets(this.props.pets)}
    </div>
  }
}

export default PetBrowser
