import React, { useState } from 'react';
import logo from './jumpfish.gif';
import './App.css';
import FishingLog from  './FishingLog/FishingLog'

const App = props => {
      
  const [ logState,setLogState] = useState({
         logs: [{
             id: '1',
             date: '5-24-2020',
             name: 'Sarturday - Ride with Family',
             entry: 'Left from Prarie Creek Marina at 10: 00 AM.Charted a course for Rambo Creek.Fished near Rambo Creek for a few minutes.Decided on heading to cove just passed Castle Cove on the PORT side.Stopped to Swim in the cove near 12: 15 PM.Around 3: 30 PM heavy downpour forced us to head into Castle cove to a back area which had steep inclines on the sides for wind protection to weather the storm.'
           },
           {
                 id: '2',
                 date: '5-30-2020',
                 name: 'Saturday - Ride with Mimi and Papa',
                 entry: 'Left from Prarie Creek Marina at 10: 00 AM. Charted a course for Rambo Creek.Fished near Rambo Creek for a few minutes.Decided on heading to cove just passed Castle Cove on the PORT side.Stopped to Swim in the cove near 12: 15 PM.Around 3: 30 PM heavy downpour forced us to head into Castle cove to a back area which had steep inclines on the sides for wind protection to weather the storm.'
           }
         ]
       });
     
     const swtichNameHandler = () => {
         setLogState({logs: [{
             id: '1',
             date: 'Saturday, May 24,2020',
             name: 'Ride with Family',
             entry: 'Left from Prarie Creek Marina at 10: 00 AM.Charted a course for Rambo Creek.Fished near Rambo Creek for a few minutes.Decided on heading to cove just passed Castle Cove on the PORT side.Stopped to Swim in the cove near 12: 15 PM.Around 3: 30 PM heavy downpour forced us to head into Castle cove to a back area which had steep inclines on the sides for wind protection to weather the storm.'
           },
           {
             id: '2',
             date: 'Saturday, May 30,2020',
             name: 'Ride with Mimi and Papa',
             entry: 'Left from Prarie Creek Marina at 10: 00 AM. Charted a course for Rambo Creek.Fished near Rambo Creek for a few minutes.Decided on heading to cove just passed Castle Cove on the PORT side.Stopped to Swim in the cove near 12: 15 PM.Around 3: 30 PM heavy downpour forced us to head into Castle cove to a back area which had steep inclines on the sides for wind protection to weather the storm.'
           }
         ]});
       };
 
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Sam's Fishing Site</h1>
        <p>
          There is more to come at a later date. Your gonna like it.
        </p>
        
      </header>
      <button onClick={swtichNameHandler}>Change Log</button>
      <div>
            <FishingLog id = {logState.logs[0].id}
                        date = {logState.logs[0].date}
            name = {logState.logs[0].name}
            entry = {logState.logs[0].entry} />
    
            <FishingLog id = {logState.logs[1].id}
                        date = {logState.logs[1].date}
                        name = {logState.logs[1].name}
                        entry = {logState.logs[1].entry} />
            
      </div>
    </div>
  )};




    export default App;
    
