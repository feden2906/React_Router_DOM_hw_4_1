import React, {Component} from 'react';
import './App.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";
import Body from "./components/body/Body";


class App extends Component {


  render() {
    return (
        <BrowserRouter>
          <Header/>
          <Body/>
        </BrowserRouter>
    );
  }
}

export default App;
