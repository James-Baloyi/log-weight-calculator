import React from 'react';
import './App.css';

class App extends React.Component{

constructor(){
  super();
  this.state = {
    sed: '',
    led: '',
    trim: '',
    density: '',
  }
}

render(){
  return (
    <div className="App">
    <h2>One</h2>
    <input type='number' placeholder='SED' id='sed' className='fillable'/>
    <input type='number' placeholder='LED' id='led' className='fillable'/>
    <select type='text'>
    <option value='4'>4 metres</option>
    <option value='5'>5 metres</option>
    <option value='6'>6 metres</option>
    <option value='7'>7 metres</option>
    <option value='8'>8 metres</option>
    </select>
    <input type='range' min='0' max='10' id='density' className='draggble' onChange={(event)=>{console.log(event.target.value)}}/>
    </div>
    );
  }
}

export default App;
