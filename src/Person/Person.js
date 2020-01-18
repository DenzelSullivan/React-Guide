import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width)': {
            width: '450px'
        }
    }

    return (
        <div className="Person" onClick={props.click}> 
            <p> Im a {props.name} and im {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
} 

export default Radium(person);