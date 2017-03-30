import React, { Component } from 'react';

class Shelf extends Component {
  constructor(props){
    super(props);
    this.state = {
      shelfItems: [
        "Bananas, B-A-N-A-N-A-S",
        "Tony's Frozen Pizza",
        "Flamin' Hot Cheetos",
        "Arugula",
        "Cinnamon Sugar Cheetos",
        "Bacon",
        "More Bacon"
      ]
    };
  }

  render() {
    const shelfItems = this.state.shelfItems.map( (item, id) => {
      return (
        <li key={id}>
          {item}
          <button onClick={() => this.props.addItem(item)}>+</button>
        </li>
      )
    })
    return (
      <div>
        <h2>Store Inventory</h2>
        <ul>
            {shelfItems}
        </ul>
      </div>
    )
  }
}

export default Shelf
