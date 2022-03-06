import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '23h4jk2',
        },
        {
          name: 'Frank',
          id: '23tyth4jk2',
        },
        {
          name: 'Lumpy',
          id: '23hwefq4jk2',
        },
        {
          name: 'Rudy',
          id: '23h4wefjk2',
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((e) => (
          <div key={e.id}>
            <h1>monster: {e.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
