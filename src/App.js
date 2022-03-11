import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users) => this.setState(()=> {
      return {monsters: users}
    },
    ()=>{
      console.log(this.state);
    }
    ))
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
