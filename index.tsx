import React, {useState} from 'react';
import ReactDOM, { render } from 'react-dom';
import './style.css'

interface AppProps { 
  
}
interface AppState {
  name: Number;
}
  ReactDOM.render(<h1>low</h1>,document.getElementById('rit'));
class Song extends React.Component<AppState, AppProps> {
  constructor(props) {
    super(props);
  this.give = {
    name:7
  };
}
  render(){
return <div><p> {this.give.name}</p></div>
  }
}
ReactDOM.render(<Song/>,document.getElementById('non'));

