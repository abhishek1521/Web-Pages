import React from 'react';
import './App.css';
import Locobuzz from './Locobuzz';

export default class App extends React.Component {
  togglePopover = () => {
    var x = document.getElementById("media-popover");
    x.style.display = (x.dataset.toggled ^= 1) ? "inline-block" : "none";
}
 render(){
  return (
    <div className="App">
     <Locobuzz togglePopover={this.togglePopover}/>
    </div>
  );
 }
}

