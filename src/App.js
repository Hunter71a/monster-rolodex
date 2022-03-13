import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filtered: [],
    };
    console.log('Constructor')
  }

  componentDidMount() {
    console.log('component did mount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users) => this.setState(()=> {
      return {monsters: users}  
      },

    
    ()=>{
      console.log(this.state);
      this.setState(()=>{return {filtered: users}})
    }
    ))
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event)=> {
            console.log(event.target.value);
            
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(event.target.value.toLowerCase());
            });
            this.setState(()=>{
              return {filtered: filteredMonsters};
            })
          }}
        />
        {this.state.filtered.map((e) => (
          <div key={e.id}>
            <h1>monster: {e.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
