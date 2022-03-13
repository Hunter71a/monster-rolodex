import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filtered: [],
      searchField: '',
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
  const filteredMonsters = this.state.monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(this.state.searchField);
  });

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event)=> {            
            const searchField = event.target.value.toLowerCase();
              this.setState(()=>{
              return {searchField};
            })
   
          }}
        />
        {filteredMonsters.map((e) => (
          <div key={e.id}>
            <h1>monster: {e.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
