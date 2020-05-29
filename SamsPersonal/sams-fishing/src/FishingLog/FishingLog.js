import React from 'react';
import '../App.css';

//ES6 function 
const fishinglog = (props) =>  {
    return (
                <div id={props.id} className="App-log">
                        <h2> {props.date} - {props.name}</h2>
                        <div className="App-entry">{props.entry}</div>
                </div>
            
           )
            
}
export default fishinglog;