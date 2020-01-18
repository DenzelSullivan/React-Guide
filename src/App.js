import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  backgroundcolor: ${props => props.alt ? 'red' : 'green'};
  fontcolor: white;
  font: inherit;
  border: 1x solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    backgroundColor: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'asdfe', name: 'Denzel', age: 24 },
      { id: 'dfnser', name: 'Nick', age: 25 },
      { id: 'wqr3efw', name: 'Brandon', age: 26 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // edit state using setstate and not state directly
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons] //es6 version of the above
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {


    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      //dynamically changing style
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    // creating a list of class names and dynamically changing them
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1> Hi, im a react app</h1>
        <p className={classes.join(' ')}> This is really working</p>
        <StyledButton 
          alt={this.state.showPersons} 
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;