import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Denzel', age: 24 },
      { name: 'Nick', age: 25 }, 
      { name: 'Brandon', age: 26 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked");
    // edit state using setstate and not state directly
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Suub', age: 25 }, 
        { name: 'Chezzy', age: 26 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'zel', age: 24 },
        { name: event.target.value, age: 25 }, 
        { name: 'Chezzy', age: 26 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Hi, im a react app</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler("Zel")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Wesley")}
          changed={this.nameChangedHandler}> moneyyy </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;